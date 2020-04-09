import React from 'react';
import './Board.css';
import {Card} from './Card.jsx';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export class Board extends React.Component{
    getCards = () => {
        this.props.client.send(JSON.stringify({
            type: ACTION_TYPES.CARDS
          }))
    }

    componentDidMount(){
        this.getCards();
    }

    render() {
        return <div className="board">
            {this.props.cards.map((card,index)=> <Card boss={this.props.isBoss} client={this.props.client} key={index} card={card} index={index}/>)}
        </div>
    }
}