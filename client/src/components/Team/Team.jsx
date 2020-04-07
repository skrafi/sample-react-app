import React from 'react';

import './Team.css';

export const Team = ({color, team, boss, client, activeTeam}) => {
    const setBoss = (value) => {
        client.send(JSON.stringify({
            type: 'set-boss',
            data: {
                userId: value,
                team: color
            }
        }))
    }
    const switchTeam = () => {
        client.send(JSON.stringify({
            type: 'switch-team',
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