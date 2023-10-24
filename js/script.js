const persone = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
  ];
  
  const arrayOggetti = [];
  const postiAssegnati = new Set(); 
  
  // Funzione per generare un posto casuale 
  function generaPostoCasuale() {
    let posto;
    do {
      posto = Math.floor(Math.random() * 10) + 1;
    } while (postiAssegnati.has(posto)); // Verifichiamo se il posto è già stato assegnato
    postiAssegnati.add(posto); // Registriamo il posto assegnato
    return posto;
  }
  
  // Iteriamo attraverso l'array di persone e creiamo un oggetto per ciascuna persona
  persone.forEach(persona => {
    const oggettoPersona = {
      nome: persona,
      tavolo: 'tavolo vip',
      posto: generaPostoCasuale() // Genera un posto unico
    };
    arrayOggetti.push(oggettoPersona);
  });
  
  console.log(arrayOggetti);
  