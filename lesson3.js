// condizioni : blocchi di codice che vengono eseguiti solo se la condizine si verifica
// IF/ELSE         IF/ELSE IF/ELSE           SWITCH

//nelle parentesi tonde sta scattando un contesto booleano, non vuole un true ma un truthy per far scattare la if;

//Operatore ternario = () ? :           ()=condizione            ?=if            :=else
    
//Esempio di password:

// let user_password = prompt('Inserisci qui la tua password');

// let password = 'ciao 2023'

// Variabile di appoggio : servono a fare dei check

// let check = false;

// console.log(check)

//fare in modo che se l'utente ha inserito la password corretta il valore dentro check non sia più false ma diventi true

// if ( user_password === password ){
//     check = true;
// }else(
    //     console.log('Password non corretta, riprova!')
// )

// if ( check == true ) {
//     console.log('La password da te inserita è corretta!')
// }else('')

// console.log(check)

// if / else if // else
    
// let chose_drink = prompt('Scegli una bevanda: \n1 - Acqua \n 2 - Coca Cola \n 3 - Birra \n 4 - Vino')

// if (chose_drink == 1){
//     console.log('Ecco qui la tua acqua');
// }else if(chose_drink == 2){
//     console.log('Ecco qui la tua coca cola');
// }else if(chose_drink == 3){

//     let age = prompt(`Questo prodotto è un alcoolico, inserisci la tua età!`)
//     if(age >= 18){
//         console.log('Ecco qui la tua birra');
//     }else{
    //         console.log('Sei minorenne, torna a casa!');

//     }
// }else if(chose_drink == 4){

//     let age = prompt(`Questo prodotto è un alcoolico, inserisci la tua età!`)
//     if(age >= 18){
//         console.log('Ecco qui il tuo vino!');
//     }else{
    //         console.log('Sei minorenne, torna a casa!');

//     }

// }else{
    //     console.log('Errore,scegli di nuovo!');

// }

// clean code fatto con operatori logici, quando il risultato di un operaione dentro una condizione if o else if è falso la condizione fa scattare la successiva;

// let voto = 30;

// if (voto < 18 && voto >= 0) {
//   console.log("insufficiente");
// } else if (voto >= 18 && voto < 25) {
//   console.log("sufficiente");
// } else if (voto >= 25 && voto < 30) {
//   console.log("buono");
// } else if (voto == 30) {
//   console.log("ottimo");
// } else {
    //   console.log("voto non valido");
// }





// lo switch : serve a verificare se un dato che viene passato corrisponde ad un ESATTO valore 



// let age = 'ciao';

// switch(true){

//     case age >= 18:
//         console.log('maggiorenne')
//         break;
//     case age < 18 && age > 0:
//         console.log('minorenne')
//         break; 

//     case typeof age != 'number':
//         console.log('devi inserire un numero')
//         break;

//         default:
//         console.log('non puoi avere 0 o meno anni')
//         break;
// }


// ciclo : blocco di istruzione che si ripete finchè la condizione non diventa falsa

// a seconda del linguaggio di programmazione cambia la quantità di cicli che abbiamo

// in js abbiamo tre tipi di cicli
//for               while               do/while 

//il ciclo for  si scrive con / for(qui si inseriscono tre diversi paramtri ovvero, 1) l'indice  let i =  ;(il punto di partenza), 2) la condizione(ovvero fino a quando si deve ripetere il ciclo ad esempio  i<=10), 3) il terzo parametro è l'incremento ovvero cosa deve fare quel ciclo finchè non raggiunge quel risultato) e poi fra le graffe ,{qui si inserisce il blocco di isturzioni che si deve ripetere}






//simuliamo un tiro di dadi

// //partenza di punteggio
// let punteggio = 0;

// //numero di tiri da fare
// let n = 5;


// for(
//     let i = 1; i <= n; i++
// ){
//     let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);

//     punteggio = punteggio + random;    

//     console.log(`Al tiro di dado numero ${i} è uscito il numero ${random} il punteggio adesso vale ${punteggio}`);
// }

// console.log(punteggio);


// let user_password = prompt(`Inserisci qui la password:`)

// let password = ('123');

// let counter = 1;



// while(user_password != password){
    
//     user_password = prompt(`Password errata, inserisci qui la password:`)
//     counter++;
    
//     if (counter == 3) {
//         break;
//     }
// }

// console.log(counter);


// if (user_password === password) {
//     console.log(`Password corretta`);
// }else{
//     console.log(`Troppi errori, non puoi accedere!`)
// }


 
for( let i = 0; i < 10; i++) {

    console.log(i);
    
}