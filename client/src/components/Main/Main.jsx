import React from 'react';

import {Menu} from '../Menu/Menu.jsx';
import {Board} from '../Board/Board.jsx';
import { ClientContext } from '../../context/clientContext.jsx';

export const Main = ({board})=>{
    return (
    <ClientContext.Consumer >{client => <div>
        <Menu client={client}/>
        <Board board={board} client={client}/>
    </div>}</ClientContext.Consumer>
        
    )
    
}