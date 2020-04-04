import React from 'react';

import './Game.css';

import {Team} from '../Team/Team.jsx';
import {Main} from '../Main/Main.jsx';
import {PLAYER} from '../../constants/general';
import { generateBoard } from '../../helpers/generateBoard';
import { setActiveTeam } from '../../constants/globals';

const teamRed = ['jurek', 'albert', 'zosia'];
const teamBlue = ['maciek', 'magda', 'pawel']

export const Game = ()=>{

    const [active] = React.useState(PLAYER.RED)
    const [redBoss, setRedBoss]= React.useState(teamRed[0])
    const [blueBoss, setBlueBoss]= React.useState(teamBlue[0])
    const board = generateBoard();
    setActiveTeam(board.first);
    return (
        <div className="game">
            <Team 
                color="red" 
                active={active} 
                team={teamRed} 
                boss={redBoss}
                setBoss={setRedBoss}
            />
            <Main 
                boss={{red: redBoss, blue: blueBoss}}
                board={board.board}
            />
            <Team 
                color="blue" 
                active={active} 
                team={teamBlue} 
                boss={blueBoss}
                setBoss={setBlueBoss}
            />
        </div>
    )
}