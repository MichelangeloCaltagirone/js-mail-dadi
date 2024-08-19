// Primo Esercizio: Dadi vs Pc

// Recupero elementi dal DOM

const userNum = document.getElementById('userNum');
const pcNum = document.getElementById('pcNum');
const result = document.getElementById('result');

// Elaboro i dati ( in questo caso li produco con Math.random)

userRdn = Math.floor(Math.random() * 6) + 1;
// Mostro in pagina
userNum.innerHTML = `Il tuo numero è: ${userRdn}`;

pcRdn = Math.floor(Math.random() * 6) + 1;
// Mostro in pagina
pcNum.innerHTML = `Il numero del PC è: ${pcRdn}`;

// Controllo il vincitore
let winOrLose = '';
winOrLose = userRdn > pcRdn ? `Hai Vinto! Complimenti` : `Hai Perso! Mi dispiace`;

if (userRdn === pcRdn) winOrLose += '. In questo caso però hai pareggiato';

// Porto in pagina il risultato
result.innerText = winOrLose;



// Secondo Esercizio: Finta Login


//Setto le variabili note

// Array contenente stringhe(email)
const emails = ['ozzyosborne@gmail.com', 'tonyiommi@gmail.com', 'billward@gmail.com', 'gezzerebutler@gmail.com'];

// Recupero dal DOM gli elementi che mi interessano
const userFieldEmail = document.getElementById('userEmail');
const buttonCheck = document.getElementById('buttonCheck');

// Dove mostrerò il messaggio della verifica in pagina
const verified = document.getElementById('verified');

// Al click del bottone, recupero il valore dell'input dell'utente, giro tutta la lista e verifico la presenza o meno del valore inserito
buttonCheck.addEventListener("click", function() {

    const inputValue = userFieldEmail.value; // recupero il valore dell'utente

    let checked = '';  // preparo variabile per verifica 

    for (let i = 0; i < emails.length; i++ ) {
        if (emails[i] === inputValue) checked = 'Sei stato verificato. Email corretta'; 
    }   

    if (!checked) verified.innerText = 'Email non valida. Riprovare';
    else verified.innerText = checked;
});






 





