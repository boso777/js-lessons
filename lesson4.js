// Una funzione è un blocco di codice che può essere riutilizzato più volte all'interno di un programma cambiandone i parametri di input.



// for(let i = 1; i <= n; i++){

//     console.log(i);

// }


// Per utilizzare una funzione, servono due passaggi fondamentali:
// 1. Definire/creare la funzione
// 2. Chiamare la funzione



// funzioni con side-effect



// Definizione della funzione

// function saluta(nome){
//     console.log(`ciao a tutti mi chiamo ${nome}`);
// }


// // Chiamata della funzione

// saluta('Mario');





// function SommaDueNumeri(numero1, numero2){

//     // scope locale 

//     let somma = numero1 + numero2;

//     //per far uscire output fuori dalle funzioni serve usare la keyword return;

//     return somma; 
// }



// let somma = SommaDueNumeri(1, 5);
// let somma2 = SommaDueNumeri(3, 10);
// let somma3 = SommaDueNumeri(44, 57)

// console.log(somma, somma2, somma3);




// let somma4 = SommaDueNumeri(somma2, somma3);

// console.log(somma4);




// function SommaDueNumeri(numero1, numero2){

// scope locale 
//per far uscire output fuori dalle funzioni serve usare la keyword return;
// potrei non assegnare la variabile che contiene l'operazione e poi far uscire con return la variabile e il suo valore, ma fare return direttamente sull'operazione per snellire il codice;


//     return numero1 + numero2;


// }



// let somma = SommaDueNumeri(1, 5);
// let somma2 = SommaDueNumeri(3, 10);
// let somma3 = SommaDueNumeri(44, 57);

// console.log(somma, somma2, somma3);

// somma4 = SommaDueNumeri(somma2, somma3);

// console.log(somma4);




// function Saluto(nome){

//     return `Ciao io mi chiamo ${nome}`

// }

// console.log(Saluto(`antonio`));




// let Sum = (n1, n2)=> n1 + n2; // se

// let somma = Sum(5, 10);

// console.log(somma);


// let sino = (n1, n2) => 
    


//funzione per checkare il pari o dispari di un numero

// let number = prompt(`Inserisci qui il tuo numero`)


// function pariDispari(N){
    
//     if (N % 2 == 0){
//         return `Il numero ${N} è Pari`;
//     }else{
//         return `Il numero ${N} è Dispari`;
//     }
// }

// console.log(pariDispari(number));




// let arr = [`osama`, `matteo`, `nino`, `antonietta`, `ciro`];

// console.log(arr);
// console.log(arr[2]);
 


// let arr1 = [1, 2, 3]

// let arr2 = arr1;

// arr1[0] = `ciao`;

// console.log(arr1);
// console.log(arr2 );

// printera in tutti e due i casi ['ciao', 2, 3]




// metodi degli array
//.push(): mi permette di aggiunfere un elemento qualsiasi in coda all'array
//.pop(): rimuove ultimo elemento di un array
//.shift():
//.unshift():
//.reverse():
//.splice(): mi permette di rimuovere uno o più elementi da un array con un qualunque indice e mi permette di aggiungere uno più elementi con un qualunque indice;Richiede da uno a n parametri;il primo rappresenta l'indice da cui partire, il secondo quanti elementi eliminare a partire dall'elemento selezionato.Dal terzo parametro in poi indico quali elementi voglio inserire a partire dall'indice scelto.
//.sort(): ordina gli elementi di un arrai in ordine alfabetico

let names = ['kevin', 'nicola', 'nicolas', 'antonio', 'luca', 'pietro'];

console.log(names);

console.log(names[2]);

names[2] = `mariottide`;

console.log(names[2]);

names.unshift('mario')

console.log(names);

names = names.concat([`lucasano`, `luscano`, `luschetto`])

console.log(names);


let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];