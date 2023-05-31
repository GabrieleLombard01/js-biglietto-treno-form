//JS RESET
console.log('JS OK')

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
----- MIA SCALETTA (sbagliata) -----
 1- Prendiamo gli input dal DOM tramite gli ID
 2- Tramite ELEMENT.VALUE andiamo a prendere i valori inseriti dall'utente
 3- Tramite (button.addEventListener ecc..) salvo i valori inseriti dall'utente
 4- Applico la logica dell'esercizio precedente 
 5- Stampo il risultato dei calcoli nella parte sottostante al form
*/
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
----- SCALETTA di Marco -----
Scrivere un programma che chieda all’utente:

- Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

# MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due 
input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.   
La risposta finale (o output) sarà anch’essa da scrivere in console.

# MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form 
(non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 1 Raccolgo tutti i riferimenti al DOM

// FORM ELEMENTS
const  nameField = document.getElementById('name');
const  kmsField = document.getElementById('kms');
const  ageField = document.getElementById('age');
const  confirmButton = document.getElementById('confirm-button');
const  resetButton = document.getElementById('reset-button');
const  buyButton = document.getElementById('buy-button');

// TICKET ELEMENTS
const ticketSection = document.getElementById('ticket-section');
const passengerElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const cabElement = document.getElementById('cab');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');

//Costanti di calcolo
const pricePerKms = 0.21;
const minDiscount = 0.8;
const overDiscount = 0.6;

// Ascolto il click del confirm-button
confirmButton.addEventListener('click', function () {
    // Recupero i valori dal form
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;

    //VALIDATION
    if (!nameValue || isNaN(kmsValue) || kmsValue < 1 ) {
        alert('Ops... Qualcosa è andato storto!');
        return;
    } 

    //prezzo e tariffa base    
    let price = kmsValue * pricePerKms;    
    let rateName = 'Tariffa Ordinaria'    

    //Discount    
    if (ageValue === `min`) {    
        price *= minDiscount;    
        rateName = `Tariffa minori`;    
    }    
    else if (ageValue === `over`) {    
        price *= overDiscount;    
        rateName = `Tariffa over 65`;    
    }  

    // Carrozza random    
    const cab = Math.floor(Math.random() * 12) + 1;    

    // PNR random    
    const pnr = Math.floor(Math.random() * (100000 - 90000 )) + 90000;    

    // Dati nel ticket    
    passengerElement.innerText = nameValue ;    
    rateElement.innerText = rateName;    
    cabElement.innerText = cab;    
    pnrElement.innerText = pnr;    
    priceElement.innerText = `€` + price.toFixed(2);   
     
        
    // Cambiare display al ticket    
    ticketSection.classList.remove(`d-none`);    
});