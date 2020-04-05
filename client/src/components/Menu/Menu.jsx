import React from 'react';

export const Menu = ({client}) => {
    const restart = () => {
        client.send(JSON.stringify({
            type: "restart"
          }))
    }
    const logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('team')
        client.send(JSON.stringify({
            type: "logout"
          }))
    }
    return <div>
        <button className="button" onClick={restart}>Restart</button>
        <button className="button">Tasuj</button>
        <button className="button">Plansza</button>
        <button className="button" onClick={logout}>Logout</button>
    </div>
}