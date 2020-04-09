import React from 'react';

import './Team.css';
import { ACTION_TYPES } from '../../constants/actionsTypes';

export const Team = ({color, team, boss, client, activeTeam}) => {
    const setBoss = (value) => {
        client.send(JSON.stringify({
            type: ACTION_TYPES.SET_BOSS,
            data: {
                userId: value,
                team: color
            }
        }))
    }
    const switchTeam = () => {
        client.send(JSON.stringify({
            type: ACTION_TYPES.SWITCH_TEAM,
        }))
    }
    return <div className={`wrapper ${activeTeam===color ? color: ''}`}>
        <div>Team: {color}</div>
        <div>Boss: <select value={boss} onChange={(e)=>setBoss(e.target.value)}>
            <option value="">None</option>
            {team.map(u=><option value={u.id}>{u.name}</option>)}
            </select></div>
        <div>Members: {team.filter(user=>user!==boss).map(user => <div key={user.id}>{user.name}</div>)}</div>
        <button onClick={()=>switchTeam()}>Pass</button>
    </div>
}