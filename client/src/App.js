import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Game} from './components/Game/Game.jsx';
import {AWS_SERVER} from './env.js'
import {ClientContext} from './context/clientContext.jsx'

import {w3cwebsocket} from 'websocket';

const local = true;
const LOCALHOST = 'ws://127.0.0.1:4000'
const BACKEND = local ? LOCALHOST : AWS_SERVER;
const client = new w3cwebsocket(BACKEND)


class App extends Component {
  state = {
    data: '',
    loading: true
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('Websocket client connected');
      this.setState({loading: false})
    }
  }
  render() {
    return this.state.loading? <div>Loading</div> :
      <ClientContext.Provider value={client}>
      <div className="App">
        <Game/>}
      </div>
      </ClientContext.Provider>
    
  }
}

export default App;
