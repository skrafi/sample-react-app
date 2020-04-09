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
    return <div className={`wrapper ${activeTeam===color ? `shadow-${color}`: ''}`}>
        <div className="section">
            <div className="label">Team:</div> 
            <div className="team">{color}</div>
        </div>
        <div className="section">
            <div className="label">Boss:</div>  
            <select className="select-inp" value={boss} onChange={(e)=>setBoss(e.target.value)}>
                <option value="">None</option>
                {team.map(u=><option value={u.id}>{u.name}</option>)}
            </select>
        </div>
        <div className="section">
            <div className="label">Members:</div> 
            <ul>
                {team.filter(user=>user!==boss).map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
        <button onClick={()=>switchTeam()}>Pass</button>
    </div>
}