/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
  ];
  
  const gasolineCars = cars.filter( (auto) => auto.type.toUpperCase() === 'benzina'.toUpperCase());
  
  const dieselCars = cars.filter( (auto) => auto.type.toUpperCase() === 'diesel'.toUpperCase());
  
  const otherCars = cars.filter( (auto) => {
    return auto.type.toUpperCase() !== 'benzina'.toUpperCase() && auto.type.toUpperCase() !== 'diesel'.toUpperCase();
  });
  
  console.log('Auto a benzina');
  console.log('*******************************');
  console.log(gasolineCars);
  
  console.log('Auto a diesel');
  console.log('*******************************');
  console.log(dieselCars);
  
  console.log('Tutte le altre auto');
  console.log(otherCars);

/****************************************************************
​
    1- Viene dichiarato un array di oggetti contenenti dati di automobili.
    tramite il metodo filter viene restituito l'array filtrato, prima per le auto a benzina, poi per le diesel e poi per tutte quelle diverse da benzina e diesel.
    Inifine si visualizzano nel log i 3 array creati.


    2- errore di sintassi, manca una virgola a riga 59 dopo la graffa. 
    errore di sintassi, riga 67, arrow funct si scrive => non >= 
    3- Errore logico, nella doppia condizione va messo && invece di || perchè deve essere vera se entrambe le condizioni sono vere contemporaneamente(non se una delle due)
    Errore logico, il case sensitive non è considerato. aggiungendo il metodo toUpperCase (o toLowerCase) per tutte le stringhe da confrontare e non si avranno problemi in questo senso.
    Errore logico, riga 70 manca il return, oppure togliendo le graffe e scrivendo tutto su una riga il return è implicito.
​
****************************************************************/