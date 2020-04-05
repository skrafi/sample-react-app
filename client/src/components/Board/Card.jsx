import React from 'react';


export const Card = ({card, client, index, boss}) => {
    const clickCard = () => {
        client.send(JSON.stringify({
            type: "click-card",
            data: index
          }))
    }
    return (
        <div className={`${boss && card.type} card2 ${card.clicked? `clicked-${card.type}` : ''}`} onClick={()=>clickCard()}>
            { card.word}
        </div>
    )
}