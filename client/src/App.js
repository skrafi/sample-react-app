import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Game} from './components/Game/Game.jsx';
import {AWS_SERVER} from './env.js'
import {ClientContext} from './context/clientContext.jsx'

import {w3cwebsocket} from 'websocket';
import { Login } from './components/Login/Login';
import { ACTION_TYPES } from './constants/actionsTypes';

const local = false;
const LOCALHOST = 'ws://127.0.0.1:4000'
const BACKEND = local ? LOCALHOST : AWS_SERVER;
const client = new w3cwebsocket(BACKEND)


class App extends Component {
  state = {
    data: '',
    loading: true,
    user: null,
    teams: {blue: [], red: []},
    cards: [],
    boss: {red:'', blue:''},
    activeTeam: ''
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('Websocket client connected');
      this.setState({loading: false})
    }
    client.onmessage=(message)=>{
      const dataFromServer = JSON.parse(message.data);
      if(dataFromServer.type===ACTION_TYPES.LOGIN && !this.state.user){
         localStorage.setItem('userName', dataFromServer.data.user.name);
         localStorage.setItem('team', dataFromServer.data.user.team);
         localStorage.setItem('id', dataFromServer.data.user.id);
        this.setState({user: dataFromServer.data.user})
      }
      if (dataFromServer.type === ACTION_TYPES.TEAMS || dataFromServer.type === ACTION_TYPES.LOGOUT) {
        this.setState({
            teams: {
                blue: Object.values(dataFromServer.data.teams.blue),
                red: Object.values(dataFromServer.data.teams.red),
            }
        });
      }
      if (dataFromServer.type === ACTION_TYPES.CARDS) {
        this.setState({
            cards: Object.values(dataFromServer.data.cards),
            activeTeam: dataFromServer.data.activeTeam
        });
      }
      if (dataFromServer.type === ACTION_TYPES.SWITCH_TEAM) {
        this.setState({
            activeTeam: dataFromServer.data.activeTeam
        });
      }
      if (dataFromServer.type === ACTION_TYPES.SET_BOSS || dataFromServer.type === ACTION_TYPES.BOSS) {
        this.setState({
            boss: {
              red: (dataFromServer.data.boss.red),
              blue: dataFromServer.data.boss.blue
            }
        });
      }
      if (dataFromServer.type === ACTION_TYPES.LOGOUT) {
        this.setState({
          user: null
      });
      }
    }
  }
  componentDidMount(){
    const name = localStorage.getItem('userName');
    const team = localStorage.getItem('team');
    const id = localStorage.getItem('id');
    if(name){
      this.setState({user: {
        name, team, id
      }})
      
    }
    
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.loading!==this.state.loading && !this.state.loading && this.state.user){
      client.send(JSON.stringify({
        type: ACTION_TYPES.LOGIN,
        data: { name: this.state.user.name, team: this.state.user.team, id: this.state.user.id }
      }))
      client.send(JSON.stringify({
        type: ACTION_TYPES.TEAMS,
      }))
      client.send(JSON.stringify({
        type: ACTION_TYPES.BOSS,
      }))
    }
  }
  render() {
    return this.state.loading? <div>Loading</div> :
      <ClientContext.Provider value={client}>
      <div className="App">
        {this.state.user 
          ? <Game 
              user={this.state.user} 
              client={client} 
              teams={this.state.teams} 
              cards={this.state.cards}
              boss={this.state.boss}
              activeTeam={this.state.activeTeam}
            /> : <Login client={client}/>}
      </div>
      </ClientContext.Provider>
    
  }
}

export default App;
