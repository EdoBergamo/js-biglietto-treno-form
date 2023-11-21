let DEBUG = true; // Setup DEBUG to see every console.log

// Inizializzazione Varabili
const nome = document.getElementById('name');
const km = document.getElementById('km');
const eta = document.getElementById('eta')
const button = document.getElementById('submit');

const prezzoPerKm = 0.21;
const scontoOver65 = 40;
const scontoUnder18 = 20;

let bigliettoElement = document.getElementById("biglietto");
let nomePasseggero = document.getElementById("fname");
let costoBiglietto = document.getElementById("costo-biglietto");

button.addEventListener("click", function () {
    bigliettoElement.style.display = "block"
    let biglietto = km.value * prezzoPerKm;
    
    if (eta.value == "minorenne") {
        biglietto -= (biglietto * scontoUnder18) / 100;
    } else if (eta.value == "over65") {
        biglietto -= (biglietto * scontoOver65) / 100;
    }

    nomePasseggero.innerHTML += nome.value;
    costoBiglietto.innerHTML += biglietto.toFixed(2);

    if (DEBUG) {
        console.log(km.value, eta.value, nome.value);
        console.log(biglietto.toFixed(2));
    }
})

// Se DEBUG == true allora fai tutti i console log
if (DEBUG) {
    console.log(nome)
    console.log(km);
    console.log(eta);
    console.log(button);
}