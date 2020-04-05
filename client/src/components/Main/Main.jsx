import React from 'react';

import {Menu} from '../Menu/Menu.jsx';
import {Board} from '../Board/Board.jsx';
import { ClientContext } from '../../context/clientContext.jsx';

export const Main = ({cards,user, isBoss})=>{
    return (
    <ClientContext.Consumer >{client => <div>
        <Menu client={client}/>
        <Board client={client} cards={cards} user={user} isBoss={isBoss}/>
    </div>}</ClientContext.Consumer>
        
    )
    
}