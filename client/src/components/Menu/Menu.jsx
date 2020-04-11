import React from 'react';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export const Menu = ({client, session}) => {
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
    const start = () => {
        client.send(JSON.stringify({
            type: ACTION_TYPES.START
          }))
    }
    const end = () => {
        console.log('end');
        client.send(JSON.stringify({
            type: ACTION_TYPES.END
          }))
    }
    return <div>
        {!session.inProgress &&<button className="btn" onClick={start}>Start</button>}
        {!session.inProgress && <button className="btn" onClick={restart}>Board</button>}
        {session.inProgress && <button className="btn" onClick={end}>Stop</button>}
        <button className="btn" onClick={logout}>Logout</button>
    </div>
}