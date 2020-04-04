const constants = require('./constants');

const getRandom = (number)=>{
    return Math.floor(Math.random()*number);
}

const generateBoard =()=>{
    let board = new Array(25);
    let result =new Array(25);

    for(let i=0;i<25;i++){
        board[i]=i;
    }
    for(let i=0;i<25;i++){
        result[i]=constants.BOARD.NEUTRAL;
    }

    let player = getRandom(2) ===1 ? constants.PLAYER.RED : constants.PLAYER.BLUE;

    const killer = board.splice(getRandom(25),1);
    console.log(killer)
    result[killer] = constants.BOARD.KILLER;

    let amount = 0;
    while(amount< 9){
        const spot = board.splice(getRandom(board.length),1);
        result[spot] = player;
        amount++;
    }

    amount = 0;
    player = player===constants.PLAYER.RED ? constants.PLAYER.BLUE : constants.PLAYER.RED;
    while(amount< 8){
        const spot = board.splice(getRandom(board.length),1);
        result[spot] = player;
        amount++;
    }

    return {board: result, first: player===constants.PLAYER.RED ? constants.PLAYER.BLUE : constants.PLAYER.RED};

}

module.exports = generateBoard;