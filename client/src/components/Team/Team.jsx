import React from 'react';

import './Team.css';
import { getActiveTeam, switchActiveTeam } from '../../constants/globals';

export const Team = ({color, team, boss, setBoss}) => {
    const activeTeam = getActiveTeam();
    return <div className={`wrapper ${activeTeam.value===color ? color: ''}`}>
        <div>Team: {color}</div>
        <div>Boss: {boss}</div>
        <div>Members: {team.filter(user=>user!==boss).map(user => <div key={user}>{user}</div>)}</div>
        <button onClick={()=>switchActiveTeam()}>Pass</button>
    </div>
}