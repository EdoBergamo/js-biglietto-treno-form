let DEBUG = true; // Setup DEBUG to see every console.log

// Inizializzazione Varabili
const km = document.getElementById('km');
const eta = document.getElementById('eta')
const button = document.getElementById('submit');

const prezzoPerKm = 0.21;
const scontoOver65 = 40;
const scontoUnder18 = 20;

button.addEventListener("click", function () {
    let biglietto = km.value * prezzoPerKm;
    
    if (eta.value < 18) {
        biglietto -= (biglietto * scontoUnder18) / 100;
    } else if (eta.value >= 65) {
        biglietto -= (biglietto * scontoOver65) / 100;
    }

    if (DEBUG) {
        console.log(km.value, eta.value);
        console.log(biglietto.toFixed(2))
    }
})

// Se DEBUG == true allora fai tutti i console log
if (DEBUG) {
    console.log(km);
    console.log(eta);
    console.log(button);
}