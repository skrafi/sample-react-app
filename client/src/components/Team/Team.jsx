import React from 'react';

import './Team.css';
import { getActiveTeam, switchActiveTeam } from '../../constants/globals';

export const Team = ({color, team, boss, client}) => {
    const activeTeam = getActiveTeam();
    const setBoss = (value) => {
        client.send(JSON.stringify({
            type: 'set-boss',
            data: {
                userId: value,
                team: color
            }
        }))
    }
    return <div className={`wrapper ${activeTeam.value===color ? color: ''}`}>
        <div>Team: {color}</div>
        <div>Boss: <select value={boss} onChange={(e)=>setBoss(e.target.value)}>
            <option value="">None</option>
            {team.map(u=><option value={u.id}>{u.name}</option>)}
            </select></div>
        <div>Members: {team.filter(user=>user!==boss).map(user => <div key={user.id}>{user.name}</div>)}</div>
        <button onClick={()=>switchActiveTeam()}>Pass</button>
    </div>
}