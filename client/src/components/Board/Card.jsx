import React from 'react';
import { ACTION_TYPES } from '../../constants/actionsTypes';


export const Card = ({card, client, index, boss, user, activeTeam, inProgress}) => {
    const [guess, setGuess] = React.useState(false);
    const [wrong, setWrong] = React.useState(false);
    const clickCard = () => {
        
        if(!inProgress || card.clicked || (user.team !== activeTeam && user.name!=='test')){
            return;
        }
        if(activeTeam=== card.type){
            setGuess(true);
        } else{
            setWrong(true);
        }
        client.send(JSON.stringify({
            type: ACTION_TYPES.CLICK_CARD,
            data: index
          }))
    }
    return (
        <div className="card-wrapper">
           <div className={`check ${guess ? 'show' : 'hide'}`}>OK!</div>
           <div className={`error ${wrong ? 'show' : 'hide'}`}>!</div>
            <div className={`card2 ${card.clicked ? 'is-flipped' : ''} `}>
                <div 
                    className={`common-card  card__face card__face--front ${boss ? card.type : ''} `} 
                    onClick={()=>clickCard()}>
                    {card.word}
                </div>
                <div className={`common-card card__face card__face--back clicked-${card.type}`}>
                    <div className="opacity">{card.word}</div>
                </div>
            </div>
        </div>
    )
}

