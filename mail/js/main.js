// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// 1. creo un array di mail
const mails = ["simone.napolitano@gmail.com", "samuele.madrigali@gmail.com", "franco.bianchi@gmail.com"];
// 2. chiedo all'utente la sua email
const userMail = prompt("Inserisci la tua email");
// 3. creo una variabile booleana "found" inizialmente la setto a false
let found = false;
// 4. attraverso la lista delle email
for( let i = 0; i < mails.length; i++ ) {
    // 5. SE userMail === mails[i] found = true
    if( userMail === mails[i] ) {
        found = true;
    }
}
// 5. stampo se l'utente può entrare oppure no
if( found ) {
    alert("Accesso garantito!");
} else {
    alert("Accesso negato!");
}