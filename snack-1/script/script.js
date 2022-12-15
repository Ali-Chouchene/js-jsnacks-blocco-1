/*
SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

//prendo gli elementi nei quali devo stampare
const resultElement = document.getElementById("result");


//chiedo all'utente 10 numeri
let somma = 0;

//sommo i numeri
for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt("Inserisci un numero", 10).trim());
    somma += number;
}

//ottengo il risultato e lo stampo nel elemento ottenuto (con i numeri inseriti)

resultElement.innerText = somma;

