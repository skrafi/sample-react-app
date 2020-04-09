import React from 'react';
import { ACTION_TYPES } from '../../constants/actionsTypes';


export const Card = ({card, client, index, boss}) => {
    const clickCard = () => {
        client.send(JSON.stringify({
            type: ACTION_TYPES.CLICK_CARD,
            data: index
          }))
    }
    return (
        <div className={`${boss && card.type} card2 ${card.clicked? `clicked-${card.type}` : ''}`} onClick={()=>clickCard()}>
            { card.word}
        </div>
    )
}