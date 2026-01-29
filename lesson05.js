// .reduce = mi permette partendo da un array di ridurre l'insieme dei dati all'interno di esso in un unico dato (non per forza primitivo);essendo una funzione di ordine superiore al suo interno richiamiamo una callback con due parametri, il primo e l'accumulatore.il secondo parametro rappresenta ogni singolo elemento dell'array di partenza.


// .filter = CREA UN CLONE DI UN ARRAY. Mi permette di scegliere gli elementi che entreranno nel nuovo array , ovvero scegliendo solo gli elementi che rispettano la mia condzione

// .forEach() =metodo solo in js pensato solo x array, NON CREA NESSUN CLONE, mi permette di applicare un side effect per ogni elemento di un array; 

// .indexOf() = cerco l'indice di uno specifico elemento in un array;

// Concatenazione fra metodi : IN UNANSOLA RIGA GLI DICO applica prima un metodo, dopo un altro ecc. con il punto sempre.(non tutti i metodi sono concatenabili)

// function sommaNumeri(arr){



//     let sum = arr.reduce((acc, n) => acc + n);
//     return sum;

// }


// let numeri = [1, 4, 2, 3, 5, 6,]



// console.log(sommaNumeri(numeri));



// let numbers = [1, 2, 3, 4, 5]



// let double = numbers.map((number, i)=> {
    
//     if (i % 2 == 0){
//         return number * 2;
        
//     }else{
//         return number;
        
//     }

// })


// console.log(numbers);

// console.log(double);


// double = double.reduce((acc, n)=> acc + n );
// console.log(double);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let dispari = numbers.filter((number)=> number % 2 != 0);

// console.log(dispari);

// let names = [`Matteto`, `marco`, `alin`, `arina`, `alissa`, `alin` ]

// let index = names.indexOf(`alin`);

// console.log(index);




// let str = `ciao marco come stai amico mio ?`

// console.log(str);

// let splitted = str.split('').reverse().join(``);

// console.log(splitted);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let doubleFilter = numbers.filter((number)=> number % 2 != 0).map((number)=> number * 2)

// console.log(doubleFilter);




// Scrivere una funzione che prenda come parametri due array della stessa lunghezza e mi resituisca la somma di tutti gli elementi all'interno di entrambi gli array.







// function sumArray (arr1, arr2){
//     let sum1 = arr1.reduce((acc, n)=> acc + n);
//     let sum2 = arr2.reduce((acc, n)=> acc + n);
//     return sum1 + sum2;
// }






// let uno = [1, 2, 3, 4, 5]
// let due = [6, 7, 8, 9, 10]

// let tre = sumArray(uno, due);

// console.log(tre);










// Dati due array sempre della stessa lunghezza ottenere un nuovo array i cui elementi siano la somma degli elementi dei primi due array con lo stesso indice



// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// let arr3 = arr1.map((number, i)=> number + arr2[i])

// console.log(arr3);








