console.log("ciao");


let a = 12;
let b = 4;
let c = 27;



// operatori matematici + - * / %(modulo) Operatore potenza **  %(modulo) ci restituisce il resto di una divisione

// 

// 

// Oggetto matt

// Dot syntax in js si usa il punto per legare un oggetto ad un operazione

// Typeof


// --- Confronto Numerico ---

// Math.max(a, b, c...): Restituisce il numero più grande
// Math.min(a, b, c...): Restituisce il numero più piccolo

// --- Arrotondamento ---

// Math.round(): Arrotonda all'intero più vicino (>= .5 eccesso, < .5 difetto)
// Math.floor(): Arrotonda SEMPRE per difetto (verso il basso)
// Math.ceil():  Arrotonda SEMPRE per eccesso (verso l'alto)

// --- Generazione Casuale ---

// Math.random(): Genera un decimale tra 0 (incluso) e 1 (escluso)
// Math.floor(Math.random() * (max - min + 1) + min); : genera un numero compreso fra max e min;



// Le stringhe

// Le stringhe sono sempre wrappate negli apici;
// Gli apici in js sono di tre tipo ovvero : 'apice singolo' , "apice doppio" e `backtip`;
//Le backtip inserite con alt+96 ti permettono di richiamare variabili nelle stringhe con i simboli ${nomevariabile};

//Concatenazione tra stringhe


let name = (" ") + prompt("Ciao come ti chiami?");

console.log( `Ciao a tutti mi chiamo ${name}` );

