import React from 'react';
import { PLAYER } from '../../constants/general';
import { ACTION_TYPES } from '../../constants/actionsTypes';

import './Login.css';

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
            <div className="login-wrapper">
            <div className="login">
                <div className="section full-width">
                    <div className="label">Username</div>
                    <input className="input-login" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                </div>
                <div className="section full-width">
                    <div className="label">Team</div>
                    <select className="select-login" onChange={(e)=>{this.setState({team: e.target.value})}} value={this.state.team}>
                        <option value={PLAYER.BALANCE}>Zbalansuj teamy</option>
                        <option value={PLAYER.RED}>{PLAYER.RED}</option>
                        <option value={PLAYER.BLUE}>{PLAYER.BLUE}</option>
                    </select>
                </div>
                
                <hr/>
                <button className="login-btn btn" onClick={()=>this.login()}>Send</button>
            </div>
            </div>
        );
    }
}