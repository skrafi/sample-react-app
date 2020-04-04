import React from 'react';
import './Board.css';
import {Card} from './Card.jsx';

export class Board extends React.Component{
    state={
        cards: []
    }
    getCards = () => {
        this.props.client.send(JSON.stringify({
            type: "cards"
          }))
    }

    componentDidMount(){
        this.getCards();
    }

    componentWillMount(){
        this.props.client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            if (dataFromServer.type === "cards") {
                this.setState({
                    cards: Object.values(dataFromServer.data.cards)
                });
            }
        }
    }

    render() {
        return <div className="board">
            {this.state.cards.map((card,index)=> <Card client={this.props.client} key={index} card={card} index={index}/>)}
        </div>
    }
}