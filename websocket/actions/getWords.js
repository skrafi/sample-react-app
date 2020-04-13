const WORDS = [
    'astronauta', 'byk', 'cebula', 'karawan', 'prawo', 
    'niedźwiedź', 'Francja', 'okulary', 'kubek', 'kometa',
    'tablica', 'komputer', 'Atlantyda', 'zegarek', 'grabarz',
    'silnik', 'kostka', 'cytryna', 'telefon','procent',
    'metal', 'sowa', 'lustro', 'kamera', 'organy',
    'ślimak', 'pirat', 'czas', 'grzmot', 'papier',
    'strzał', 'Afryka', 'korona', 'skorupa', 'żelazo',
    'wiedźma', 'feniks', 'wąż', 'poczta', 'sukienka',
    'Saturn', 'ława', 'dno', 'teatr', 'diament',
    'pociąg', 'spadek', 'żabka', 'placek', 'rzęsa',
    'rzut', 'guma', 'soczewka','kontrakt', 'kiwi',
    'klucz','masa','jagoda','rura','usta',
    'ogon', 'dusza', 'królik','superbohater','bal',
    'księżniczka','trucizna', 'chochlik', 'klawisz', 'mistrz',
    'stołek', 'kciuk', 'szkoła', 'most', 'bomba',
    'ruletka', 'statek', 'trawa', 'siano', 'lew',
    'cebula', 'talia', 'paluszki', 'ogień', 'szkło',
    'wojna', 'mur', 'pociecha', 'plaża', 'szczyt',
    'zmywacz', 'dzięcioł', 'plik', 'awaria', 'ucho',
    'pazur', 'warsztat', 'węgiel', 'miesiąc', 'warunek',
    'lampka', 'targ', 'kreda', 'magia', 'fajka',
    'osa', 'torba', 'festiwal', 'słowo', 'funkcja',
    'ponton', 'kogut', 'łabędź', 'krasnal', 'tęcza',
    'zupa', 'film', 'igła', 'rak', 'życie',
    'pustka', 'belka', 'sieć', 'lód', 'rycerz'
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