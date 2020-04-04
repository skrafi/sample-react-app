import { PLAYER } from "./general";

export const me = 'magda';

const activeTeam = {value: ''};


export const setActiveTeam = (value) => {
    activeTeam.value = value;
}

export const getActiveTeam = () => {
    return activeTeam;
}

export const switchActiveTeam = () => {
    activeTeam.value = PLAYER.RED ? PLAYER.BLUE : PLAYER.RED;
}
