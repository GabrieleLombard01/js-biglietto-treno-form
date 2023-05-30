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
const = nameField = document.getElementById('name');
const = kmsField = document.getElementById('kms');
const = ageField = document.getElementById('age');
const = confirmButton = document.getElementById('confirm-button');
const = resetButton = document.getElementById('reset-button');
const = buyButton = document.getElementById('buy-button');

// TICKET ELEMENTS
const ticketSection = document.getElementById('ticket-section');
const passengerElement = document.getElementById('passenger');
const rateElement = document.getElementById('rate');
const cabElement = document.getElementById('cab');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');