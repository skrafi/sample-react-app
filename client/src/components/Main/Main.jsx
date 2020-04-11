import React from 'react';

import {Menu} from '../Menu/Menu.jsx';
import {Board} from '../Board/Board.jsx';
import { ClientContext } from '../../context/clientContext.jsx';

export const Main = ({cards,user, isBoss, activeTeam, session})=>{
    return (
    <ClientContext.Consumer >{client => <div>
        <Menu client={client} session={session}/>
        <Board session={session} client={client} cards={cards} user={user} activeTeam={activeTeam} isBoss={isBoss}/>
    </div>}</ClientContext.Consumer>
        
    )
    
}