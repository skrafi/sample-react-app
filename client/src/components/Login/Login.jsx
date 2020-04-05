import React from 'react';
import { PLAYER } from '../../constants/general';

export class Login extends React.Component {
    state={
        name: '',
        team: PLAYER.RED
    }
    login = () => {
        this.props.client.send(JSON.stringify({
            type: 'login',
            data: {
                name: this.state.name,
                team: this.state.team
            }
        }))
    }

    render(){
        return (
            <div>
                <input value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                <select onChange={(e)=>{this.setState({team: e.target.value})}} value={this.state.team}>
                    <option value={PLAYER.RED}>{PLAYER.RED}</option>
                    <option value={PLAYER.BLUE}>{PLAYER.BLUE}</option>
                </select>
                <button onClick={()=>this.login()}>Send</button>
            </div>
        );
    }
}