import React from 'react';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export const Menu = ({client}) => {
    const restart = () => {
        client.send(JSON.stringify({
            type: ACTION_TYPES.RESTART
          }))
    }
    const logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('team')
        client.send(JSON.stringify({
            type: ACTION_TYPES.LOGOUT
          }))
    }
    return <div>
        <button className="button" onClick={restart}>Restart</button>
        <button className="button">Tasuj</button>
        <button className="button">Plansza</button>
        <button className="button" onClick={logout}>Logout</button>
    </div>
}