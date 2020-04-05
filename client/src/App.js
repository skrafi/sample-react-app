import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Game} from './components/Game/Game.jsx';
import {AWS_SERVER} from './env.js'
import {ClientContext} from './context/clientContext.jsx'

import {w3cwebsocket} from 'websocket';
import { Login } from './components/Login/Login';

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
    boss: {red:'', blue:''}
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('Websocket client connected');
      this.setState({loading: false})
    }
    client.onmessage=(message)=>{
      const dataFromServer = JSON.parse(message.data);
      if(dataFromServer.type==='login' && !this.state.user){
         localStorage.setItem('userName', dataFromServer.data.user.name);
         localStorage.setItem('team', dataFromServer.data.user.team);
         localStorage.setItem('isBoss', dataFromServer.data.user.isBoss);
        this.setState({user: dataFromServer.data.user})
      }
      if (dataFromServer.type === "teams" || dataFromServer.type === "logout") {
        this.setState({
            teams: {
                blue: Object.values(dataFromServer.data.teams.blue),
                red: Object.values(dataFromServer.data.teams.red),
            }
        });
      }
      if (dataFromServer.type === "cards") {
        this.setState({
            cards: Object.values(dataFromServer.data.cards)
        });
      }
      if (dataFromServer.type === "set-boss" || dataFromServer.type === "boss") {
        this.setState({
            boss: {
              red: (dataFromServer.data.boss.red),
              blue: dataFromServer.data.boss.blue
            }
        });
      }
      if (dataFromServer.type === "logout-me") {
        this.setState({
          user: null
      });
      }
    }
  }
  componentDidMount(){
    const name = localStorage.getItem('userName');
    const team = localStorage.getItem('team');
    const isBoss = localStorage.getItem('isBoss');
    if(name){
      this.setState({user: {
        name, team, isBoss
      }})
      
    }
    
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.loading!==this.state.loading && !this.state.loading && this.state.user){
      client.send(JSON.stringify({
        type: 'login',
        data: { name: this.state.user.name, team: this.state.user.team }
      }))
      client.send(JSON.stringify({
        type: 'teams',
      }))
      client.send(JSON.stringify({
        type: 'boss',
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
              boss={this.state.boss}/> : <Login client={client}/>}
      </div>
      </ClientContext.Provider>
    
  }
}

export default App;
