import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Game} from './components/Game/Game.jsx';
import {AWS_SERVER} from './env.js'
import {ClientContext} from './context/clientContext.jsx'

import {w3cwebsocket} from 'websocket';
import { Login } from './components/Login/Login';
import { ACTION_TYPES } from './constants/actionsTypes';
import { WinnerBox } from './components/WinnerBox/WinnerBox';

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
    activeTeam: '',
    session: {
      inProgess: false,
      left: {
        blue: 0,
        red: 0
      }
    },
    winner: ''
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('Websocket client connected');
      this.setState({loading: false})
    }
    client.onclose=()=>{
      localStorage.removeItem('userName')
      localStorage.removeItem('team')
      localStorage.removeItem('id')
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
        console.log(dataFromServer.data);
        this.setState({
            cards: Object.values(dataFromServer.data.cards),
            activeTeam: dataFromServer.data.activeTeam,
            session: dataFromServer.data.session,
            winner: dataFromServer.data.winner,
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
      if (dataFromServer.type === ACTION_TYPES.START || dataFromServer.type === ACTION_TYPES.END) {
        this.setState({
          session: {
            ...dataFromServer.data.session,
            winner: dataFromServer.data.winner,
          }
        });
     }


      if (dataFromServer.type === ACTION_TYPES.LOGOUT_ME) {
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
    console.log(this.state.winner, 'app');
    return this.state.loading? <div>Loading</div> :
      <ClientContext.Provider value={client}>
        <div className="App">
        <WinnerBox winner={this.state.winner} client={client}/>
          {this.state.user 
            ? <Game 
                user={this.state.user} 
                client={client} 
                teams={this.state.teams} 
                cards={this.state.cards}
                boss={this.state.boss}
                activeTeam={this.state.activeTeam}
                session={this.state.session}
              /> : <Login client={client}/>}
        </div>
      </ClientContext.Provider>
    
  }
}

export default App;
