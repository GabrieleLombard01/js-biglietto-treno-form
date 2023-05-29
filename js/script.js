//JS RESET
console.log('JS OK')
/*
//---Calcolatore:

//Elemento DOM
const totalElement = document.getElementById('total');

//Messaggio per l'utente
const message = 'Il prezzo del tuo biglietto è: € ';

//Prezzo in base ai KM
const priceKm = 0.21;

//Discount
let discount = null;

//Info utente
const kms = parseInt(prompt('Quanti chilomentri devi percorrere?', 100).trim());
const age = parseInt(prompt('Quanti anni hai?', 18).trim()); 

//Prezzo calcolator
const basePrice = priceKm * kms;
let finalPrice = basePrice

if(age >= 65){
    discount = 40;
} else if (age <= 18){
    discount = 20;
}

//Inserisco Price nell'elemento
totalElement.innerText = message + finalPrice.toFixed(2);
*/

/*
 1- Prendiamo gli input dal DOM tramite gli ID
 2- Tramite ELEMENT.VALUE andiamo a prendere i valori inseriti dall'utente
 3- Tramite (button.addEventListener ecc..) salvo i valori inseriti dall'utente
 4- Applico la logica dell'esercizio precedente 
 5- Stampo il risultato dei calcoli nella parte sottostante al form
*/