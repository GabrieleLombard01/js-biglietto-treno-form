//JS RESET
console.log('JS OK')

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
const price = priceKm * kms;
console.log(kms,age,price);

//Inserisco Price nell'elemento
totalElement.innerText = message + price.toFixed(2);
