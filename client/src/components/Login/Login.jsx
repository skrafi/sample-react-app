import React from 'react';
import { PLAYER } from '../../constants/general';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export class Login extends React.Component {
    state={
        name: '',
        team: PLAYER.RED
    }
    login = () => {
        this.props.client.send(JSON.stringify({
            type: ACTION_TYPES.LOGIN,
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