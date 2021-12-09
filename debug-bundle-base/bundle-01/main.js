/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//  1- Questo è un ciclo for, cicla tutto quello che è presente nelle graffe fintanto che la seconda istruzione viene soddisfatta.
// 2 - In questo caso l'errore non è di sintassi
// 3 - Si, l'errore sta nel fatto che con l'istruzione i > 5 il ciclo non inizia neanche poichè i non è superiore a 5 e la condizione risulta subito non soddisfatta.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

//  1- Funzione a cui passiamo un numero come parametro, con una condizione (if) dove viene prima stabilito se il numero è pari con la formula del resto. Se il numero è pari faila somma num+5 altrimenti resituisci il numero senza sommargli nulla.
// 2 - In questo caso l'errore non è di sintassi
// 3 - Si, l'errore sta nel segno = che, scritto cosi, indica un'uguaglianza mentre l'if presuppone un confronto che va scritto con == oppure ===


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

//  1- Ciclo for semplice
// 2 - Si, l'erroe di sintassi sta nella virgola. Le tre istruzioni devono essere separate da ; (punto e virgola)
// 3 - Non ci sono errori logici


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
function displayEvenNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(evenNumbers);

//  1- funzione dove vengono dichiarati due array uno con 8 numeri e uno vuoto. Si fa il ciclo sul primo array e con un if si stabilisce se il numero è pari allora quel numero viene aggiunto al secondo array. Alla fine si resituisce il secondo array che dovrebbe essere formato di soli numeri pari.
//errore 1: Il punto e virgola dopo i++ non va messo (sintassi)

//errore 2: Il segno uguale scritto da solo rappresenta un'uguaglianza e non un confronto (logico)

//errore 3: I due array devono essere dichiarati fuori dalla funzione altrimenti non verranno visti. (logico)

//errore 4: Il punto e virgola non va messo dopo la parentesi con la condizione dell'if. (sintassi)

//errore 5: Il return deve stare fuori dal ciclo for altrimenti si ferma dopo il primo "giro". (logico)

//errore 6: E' sbagliato mettere numbers.length - 1 perchè in questo modo l'ottavo elemento non viene ciclato, è giusto mettere numbers.length (logico)

//errore 7: ALl'interno della condizione va messo numbers[i](logico)

//errore 8: Nella parentesi dopo il push va messo numbers[i](logico)

//errore 9: Credo che sia piu corretto inizializzare gli array con const invece di let (logico)