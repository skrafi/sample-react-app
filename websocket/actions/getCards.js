const getWords = require('./getWords')
const generateBoard = require('./generateBoard')

function getCards(){
    const words = getWords();
    const {board, first} = generateBoard();
    const cards = words.map((w,index) => ({
        word: w,
        type: board[index],
        clicked: false
    }))
    return {cards, activeTeam: first}
}

module.exports = getCards;