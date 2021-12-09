/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
   
let myAge = 18; //qui lo metto fisso ma si potrebbe mettere un input per l'utente

function checkAge(num) {

  let message = '';
    
  if (num < 18) {
      message = `Sei troppo giovane! Hai ${num} anni!`;
  } else {
      message = 'Hai almeno 18 anni!';
  }

  return message
  
}
checkAge(myAge);
console.log(checkAge(myAge));

/****************************************************************
​ 
    1- Una funzione che, in base all'età (numero) che riceve, stabilisce se stampare un messaggio oppure un altro.
    2- 
    3- La variabile myAge e message devono essere inizializzata con let.
    la variabile myAge va dichiarata fuori dalla funzione altriementi non viene vista.
    Sarebbe meglio passare l'età come parametro della funzione per poi richiamarla.
    Manca il return alla fine della funzione che resituisce il messaggio corretto.
    Il messaggio "hai piu di 18 anni" non è propriamente corretto dato che non considera l'opzione in cui abbia esattamente 18 anni. Sarebbe piu corretto "hai almeno 18 anni"

     
****************************************************************/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
  }
  printColorsNumber();
  //1- Funzione che stampa nel log quanti elementi sono presenti nell'array dichiarato.

  //errore di sintassi, lenght è sbagliato, length è corretto.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

//1- Funzione che riceve un numero tramite un prompt e lo somma a un altro numero fisso (12) per poi visualizzare il totale nel log.

  //errore logico, va specificato con parseInt che il valore userNumber è un numero, altrimenti non verrà sommato ma concatenato come stringa.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;
    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//1- Funzione che stabilisce se un indirizzo email è presente o meno nell'array utilizzando includes e in base a questo determina se l'accesso è consentito o meno.

  //errore logico e di sintassi, grantAccess è una variabile booleana, per tanto true o false si scrivono senza apici, altrimenti sarebbe una stringa.



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
  
    const userEmail = prompt('Inserisci il tuo indirizzo email');
  
    let grantAccess = false;
  
    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = true;            
            
      }
        
    }
  
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
   }
  
  }
  checkAccessImproved();

//1- Funzione che stabilisce se un indirizzo email è presente o meno nell'array senza l'utilizzo di includes ma usando un ciclo for con all'interno un controllo per verificare che l'inidirizzo sia superiore a 5 caratteri.  In base a questo si determina se l'accesso è consentito o meno. 

  //errore di sintassi, mancava una graffa di chiusura della funzione, da mettere prima della chiamata della funzione stessa. 
  // Il true era scritto con gli apici ma essendo un booleano va messo senza apici. (anche se il browser lo capisce lo stesso)






























