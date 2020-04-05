import React from 'react';

import './Game.css';

import {Team} from '../Team/Team.jsx';
import {Main} from '../Main/Main.jsx';
import {PLAYER} from '../../constants/general';

export class Game extends React.Component{
    state = {
        active: PLAYER.RED
    }
    componentDidMount(){
        this.props.client.send(JSON.stringify({
            type: "teams"
          }))
    }
    render(){
        return (
            <div className="game">
                <Team 
                    color="red" 
                    active={this.state.active} 
                    team={this.props.teams.red} 
                    boss={this.props.boss.red}
                    client={this.props.client}
                />
                <Main 
                    boss={{red: '', blue: ''}}
                    cards={this.props.cards}
                    user={this.props.user}
                    isBoss={this.props.user.id === this.props.boss[this.props.user.team]}
                />
                <Team 
                    color="blue" 
                    active={this.state.active} 
                    team={this.props.teams.blue} 
                    boss={this.props.boss.blue}
                    client={this.props.client}
                />
            </div>
        )
    }
}