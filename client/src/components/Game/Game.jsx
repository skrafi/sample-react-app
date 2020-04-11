import React from 'react';

import './Game.css';

import {Team} from '../Team/Team.jsx';
import {Main} from '../Main/Main.jsx';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export class Game extends React.Component{
    state = {
        isBoss: this.props.user.id === this.props.boss[this.props.user.team]
    }
    componentDidMount(){
        this.props.client.send(JSON.stringify({
            type: ACTION_TYPES.TEAMS
          }))
    }
    componentDidUpdate(props){
        if(props.user.id !== this.props.user.id || this.props.boss[this.props.user.team] !== props.boss[this.props.user.team]){
            this.setState({isBoss: this.props.user.id === this.props.boss[this.props.user.team]})
        }
    }
    render(){
        console.log(this.props.user.id,' / ', this.props.boss[this.props.user.team]);
        return (
            <div className="game">
                <Team 
                    color="red" 
                    team={this.props.teams.red} 
                    boss={this.props.boss.red}
                    client={this.props.client}
                    activeTeam={this.props.activeTeam}
                    userColor={this.props.user.team}
                    session={this.props.session}
                />
                <Main 
                    boss={{red: '', blue: ''}}
                    cards={this.props.cards}
                    user={this.props.user}
                    isBoss={this.state.isBoss}
                    activeTeam={this.props.activeTeam}
                    session={this.props.session}
                />
                <Team 
                    color="blue" 
                    team={this.props.teams.blue} 
                    boss={this.props.boss.blue}
                    client={this.props.client}
                    activeTeam={this.props.activeTeam}
                    userColor={this.props.user.team}
                    session={this.props.session}
                />
            </div>
        )
    }
}