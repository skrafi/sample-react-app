const WORDS = [
    'astronauta', 'byk', 'cebula', 'karawan', 'prawo', 
    'niedźwiedź', 'Francja', 'okulary', 'kubek', 'kometa',
    'tablica', 'komputer', 'Atlantyda', 'zegarek', 'grabarz',
    'silnik', 'kostka', 'cytryna', 'telefon','procent',
    'metal', 'sowa', 'lustro', 'kamera', 'organy',
    'ślimak', 'pirat', 'czas', 'grzmot', 'papier',
    'strzał', 'Afryka', 'korona', 'skorupa', 'żelazo'
]

function getRandom(number){
    return Math.floor(Math.random()*number);
}

function getWords() {
    const numbers = [];
    for(let i=0;i<WORDS.length;i++){
        numbers[i] = i;
    }
    const words = [];
    let amount = 0;
    while(amount<25){
        const spot = numbers.splice(getRandom(numbers.length),1);
        words.push(WORDS[spot]);
        amount++;
    }
    return words;
}

module.exports = getWords;