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




