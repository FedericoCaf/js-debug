
let myAge = 18; //qui si potrebbe mettere un input per l'utente

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

//ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//   console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

//errore di sintassi, lenght è sbagliato, length è corretto.

// ESERCIZIO 3
// function addNumbers() {
//   const userNumber = parseInt(prompt('Inserisci un numero'));
//   const total = userNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//   const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//       grantAccess = true;
//   }

//   if (grantAccess === true) {
//       console.log('Accesso consentito!');
//   } else {
//       console.log('Accesso negato!');
//   }
// }
// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//   const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = false;

//   for (let i = 0; i < addresses.length; i++) {
//    const email = addresses[i];
      
//     if (userEmail.length > 5) {
          
//       if (email === userEmail) {
//       grantAccess = true;            
          
//     }
      
//   }

//   if (grantAccess) {
//       console.log('Accesso consentito!');
//   } else {
//       console.log('Accesso negato!');
//   }
//  }

// }
// checkAccessImproved();

