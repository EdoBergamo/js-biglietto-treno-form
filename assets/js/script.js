let DEBUG = true; // Setup DEBUG to see every console.log

// Inizializzazione Varabili
const km = document.getElementById('km');
const eta = document.getElementById('eta')
const button = document.getElementById('submit');

button.addEventListener("click", function () {
    if (DEBUG) {
        console.log(km.value, eta.value);
    }
})

// Se DEBUG == true allora fai tutti i console log
if (DEBUG) {
    console.log(km);
    console.log(eta);
    console.log(button);
}