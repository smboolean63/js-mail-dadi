// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. generare due numeri random fra 1 e 6 uno per lo user e uno per la cpu
const numberUser = Math.floor(Math.random() * 6) + 1;
const numberCpu = Math.floor(Math.random() * 6) + 1;
// 2. SE numberUser > numberCpu stampo "Hai vinto"
//    ALTRIMENTI SE numberUser == numberCpu stampo "Pareggio"
//    ALTRIMENTI stampo "Hai perso"
console.log(numberUser, numberCpu);

if(numberUser > numberCpu) {
    console.log("Hai vinto!");
} else if(numberUser === numberCpu) {
    console.log("Pareggio");
} else {
    console.log("Hai Perso!");
}