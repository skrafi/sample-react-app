import React from 'react';
import './WinnerBox.css';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export class WinnerBox extends React.Component {
    newGame = () => {
        console.log('end');
        this.props.client.send(JSON.stringify({
            type: ACTION_TYPES.END
          }))
          this.props.client.send(JSON.stringify({
            type: ACTION_TYPES.RESTART
          }))
    }
    render(){
        const winner = this.props.winner;
        console.log('winner', winner);
        return winner? (
            <div className="overlay">
                <div className="box-wrapper">
                    <div className="box">
                        <div className="winner">{winner} team wins!</div>
                        <button className="btn" onClick={this.newGame}>New Game</button>
                    </div>
                    
                </div>
            </div>
        ) : null;
    }
}