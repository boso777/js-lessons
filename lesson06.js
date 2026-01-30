// un oggetto in js viene rappresentato come una lista NON ordinata, di coppie chiave - valore;

let smartphone = {
    marca: "Xiaomi",
    modello: "Redmi 12 lite",
    prezzo: 500,
    contatti: ["Davide", "Giada", "Giancarlo", "Antonio"],

    chiama: function () {
        console.log("Sto chiamando...");
    },

    showContacts: function () {
        smartphone.contatti.forEach((contatto) => console.log(contatto));
    },

    // ti passo un nome
    aggiungi_contatti: function (nome) {
        this.contatti.push(nome);
    },

    rimuovi_contatto: function (nome_rimosso) {
        
        
        let index = this.contatti.indexOf(nome_rimosso);
        
        if(index == -1){
            return console.log('Reinserisci il nome da elimanare!');
            ;
        }else{
            return this.contatti.splice(index, 1);
        }
    },

};

smartphone.rimuovi_contatto('Giancaro')

console.log(smartphone);




