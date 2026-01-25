//Dato che sei su JavaScript, prova a creare un piccolo script che verifichi se una password inserita in un input ha almeno 8 caratteri e un numero. È il tuo primo mattoncino di logica di sicurezza.



let user_password = prompt('inserisci la tua password!')

check = false;

if( ( user_password.length >= 8 ) && ( user_password.includes ('!') ) ) {
    check = true;
}


if (check == false ){
    console.log('something wrong baby?')
} else {
    console.log('okkkk')
}