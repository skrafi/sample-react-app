const getWords = require('./getWords')
const generateBoard = require('./generateBoard')

function getCards(){
    const words = getWords();
    const board = generateBoard().board;
    return words.map((w,index) => ({
        word: w,
        type: board[index],
        clicked: false
    }))
}

module.exports = getCards;