import React from 'react';
import { ACTION_TYPES } from '../../constants/actionsTypes';


export const Card = ({card, client, index, boss, user, activeTeam}) => {
    const [guess, setGuess] = React.useState(false);
    const clickCard = () => {
        
        if(card.clicked ){
            return;
        }
        if(activeTeam=== card.type){
            
            setGuess(true);
        }
        client.send(JSON.stringify({
            type: ACTION_TYPES.CLICK_CARD,
            data: index
          }))
    }
    return (
        <div className="card-wrapper">
           <div className={`check ${guess ? 'show' : 'hide'}`}>OK!</div>
            <div className={`card ${card.clicked ? 'is-flipped' : ''} `}>
            
                <div 
                    className={`common-card ${boss && card.type} card__face card__face--front `} 
                    onClick={()=>clickCard()}>
                    {card.word}
                </div>
                <div className={`common-card card__face card__face--back clicked-${card.type}`}>
                    <div class="opacity">{card.word}</div>
                </div>
            </div>
        </div>
    )
}

