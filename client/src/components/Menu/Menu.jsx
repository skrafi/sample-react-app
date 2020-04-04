import React from 'react';

export const Menu = ({client}) => {
    const restart = () => {
        client.send(JSON.stringify({
            type: "restart"
          }))
    }
    return <div>
        <button className="btn primary" onClick={restart}>Restart</button>
        <button className="btn primary">Tasuj</button>
        <button className="btn primary">Plansza</button>
    </div>
}