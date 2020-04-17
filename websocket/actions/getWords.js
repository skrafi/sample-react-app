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
    'klucz', 'masa', 'jagoda', 'rura', 'usta',
    'ogon', 'królik','superbohater', 'bal',
    'księżniczka','trucizna', 'chochlik', 'klawisz', 'mistrz',
    'stołek', 'kciuk', 'szkoła', 'most', 'bomba',
    'ruletka', 'statek', 'trawa', 'siano', 'lew',
    'talia', 'paluszki', 'ogień', 'szkło',
    'wojna', 'mur', 'pociecha', 'plaża', 'szczyt',
    'zmywacz', 'dzięcioł', 'plik', 'awaria', 'ucho',
    'pazur', 'warsztat', 'węgiel', 'miesiąc', 'warunek',
    'lampka', 'targ', 'kreda', 'magia', 'fajka',
    'osa', 'torba', 'festiwal', 'słowo', 'funkcja',
    'ponton', 'kogut', 'łabędź', 'krasnal', 'tęcza',
    'zupa', 'film', 'igła', 'rak', 'życie',
    'pustka', 'belka', 'sieć', 'lód', 'rycerz',
    'Żuk', 'geniusz', 'mucha', 'butelka', 'strona',
    'helikopter', 'aztek', 'pingwin', 'król', 'grabarz', 'niedźwiedź',
    'papier', 'jaja', 'merkury', 'spadochron', 'praca', 'gotyk', 'punkt',
    'hak', 'dinozaur', 'samolot', 'pekin', 'strumień', 'księżyc',
    'ryba', 'funt', 'noc', 'olimp', 'pojazd', 'powietrze', 'bank', 'jowisz', 'port', 'las', 'ekran',
    'nektar', 'znak', 'ciało', 'marchew', 'china', 'dziobak', 'obcy', 'pudło', 'milioner', 'berlin', 'szpilka', 'ząb',
    'obsada', 'anioł', 'szpieg', 'truteń', 'stadion', 'pies', 'budowa', 'francuz', 'gniazdko', 'kod', 'woda', 'ambasada',
    'prawo', 'grzyb', 'wiatr', 'zwoje', 'żuraw', 'przewodnik', 'dzień', 'czekolada', 'kasyno', 'szpital',
    'teleskop', 'limuzyna', 'ogier', 'gnat', 'róg', 'podkład', 'gołąb', 'dzwon', 'rewolucja',
    'szczypior', 'splot', 'ameryka', 'pierścień', 'tusz', 'szekspir', 'europa', 'rzym', 'zieleń', 'krówka', 'wieżowiec',
    'podkowa', 'pasta', 'moskwa', 'fartuch', 'sokół', 'maj', 'gwiazda', 'siekacz', 'loch ness', 'dziura', 'lina',
    'miedź', 'kręgi', 'grecja', 'perła', 'lis', 'rama', 'ambulans', 'łożysko', 'promień', 'miód', 'duch', 'wydech', 'drzewo',
    'but', 'klamka', 'kot', 'pas', 'czar', 'nić', 'pupil', 'choroba', 'śmierć', 'maks',
    'płyta', 'wstęp', 'siła', 'góra', 'kucharz', 'laska', 'kret', 'pielęgniarka', 'tusza', 'bąk', 'afryka',
    'ruda', 'kraków', 'plastik', 'wieża', 'słup', 'rekin', 'donice', 'policja',
    'koń', 'egipt', 'tokio', 'kaptur', 'oliwa', 'szafa', 'zebra',
    'pająk', 'keczup', 'pan', 'torebka', 'kaczor', 'zespół', 'ośmiornica', 'samochód', 'diament', 'doktor',
    'komórka', 'ninja', 'australia', 'koło', 'Nowy York', 'Polska', 'Żelazo', 'piramida', 'strzał',
    'szczęście', 'gigant', 'Waszyngton', 'wkład', 'orzech', 'lew', 'golf', 'poczta',
    'łuk', 'stół', 'jatka', 'dywan', 'stopień', 'Dusza', 'pokrywka', 'Dania', 'kiwi', 'gaz', 'kość',
    'sznur', 'usta', 'czapa', 'nurek', 'himalaje', 'stan', 'mistrz', 'śnieg', 'żubr', 'amazonka', 
    'bałwan', 'bicz', 'bal', 'rzęsa', 'lot', 'twarz', 'łódź', 'plaża',
    'prawnik', 'pole', 'guzik', 'mysz', 'Niemcy', 'połączenie', 'wachlarz', 'głowa',
    'oko', 'satelita', 'gra', 'mikroskop', 'nauczyciel', 'bar', 'niebo', 'nora', 'północ',
    'holender', 'model', 'kamień', 'flet', 'olej', 'jabłko', 'bomba', 'jednorożec', 'pochodnia', 'królowa',
    'opoka', 'naukowiec', 'Londyn', 'noga', 'krzyż', 'gracja', 'kolec', 'wieloryb', 'wybuch', 'basen', 'centaur',
    'gładki', 'szczyt', 'świerszcz', 'talerz', 'foka', 'centrum', 'orzeł',
    'kontakt', 'zamek', 'cień', 'stopa', 'trójkąt', 'bawełna', 'ucho', 'szkło', 'sztuka', 'klatka', 'linia',
    'robot', 'złoto', 'waga', 'fala', 'szkocja', 'ręka', 'świnia', 'rękawica', 'ziemia', 'rakieta',
    'materiał', 'tuba', 'laser', 'trąba', 'kwadrat', 'opera', 'kangur', 'serce',
    'anglia', 'lakier', 'beczka', 'hotel', 'rząd', 'pistolet', 'język', 'figura', 'humor',
    'kropka', 'widelec', 'tchórz', 'nóż', 'babka', 'złodziej', 'wiosna', 'szmugiel', 'zmiana', 'krzesło', 'bermudy',
    'napad', 'paleta', 'meksyk', 'kozioł', 'kościół', 'antarktyda', 'płot', 'dwór', 'konar', 'kostium',
    'pilot', 'groszek', 'żołnierz', 'kalosz', 'korzenie', 'taniec', 'mamut', 'róża', 'smok',
    'toaleta', 'robak', 'karta', 'czujka', 'koncert', 'Hollywood', 'kasa', 'nos'
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