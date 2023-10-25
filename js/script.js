// SNACK 1

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
  
  // console.log(arrayOggetti);
  
// SNACK 2

  // Dati degli studenti
const students = [
    { id: 213, Name: "Marco della Rovere", Grades: 78 },
    { id: 110, Name: "Paola Cortellessa", Grades: 96 },
    { id: 250, Name: "Andrea Mantegna", Grades: 48 },
    { id: 145, Name: "Gaia Borromini", Grades: 74 },
    { id: 196, Name: "Luigi Grimaldello", Grades: 68 },
    { id: 102, Name: "Piero della Francesca", Grades: 50 },
    { id: 120, Name: "Francesca da Polenta", Grades: 84 }
];

// 1. Lista con nomi in maiuscolo
const upperCaseNames = students.map(student => student.Name.toUpperCase());

// 2. Lista di studenti con voto superiore a 70
const highGradesStudents = students.filter(student => student.Grades > 70);

// 3. Lista di studenti con voto superiore a 70 e id superiore a 120
const highGradesAndIdStudents = students.filter(student => student.Grades > 70 && student.id > 120);

// Stampa i risultati


// console.log("Nomi in maiuscolo:", upperCaseNames);
// console.log("Studenti con voti superiori a 70:", highGradesStudents);
// console.log("Studenti con voti superiori a 70 e id > 120:", highGradesAndIdStudents);


// SNACK 3

// Creazione dell'array di oggetti
const biciDaCorsa = [
  { nome: "Canyon", peso: 7.7 },
  { nome: "Cube", peso: 7.1 },
  { nome: "Giant", peso: 8.1 },
  { nome: "Trek", peso: 7.9 },
  { nome: "Pinarello", peso: 8.6 },
];

// Trova la bici con il peso minore
let biciLeggera = biciDaCorsa[0]; 

for (const bici of biciDaCorsa) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

// Stampa la bici con il peso minore utilizzando destructuring e template literal
console.log(`La bici più leggera è ${biciLeggera.nome} peso ${biciLeggera.peso} kg.`);

  // SNACK 4

  // Funzione per generare un numero casuale tra min e max (inclusi)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creiamo un array di oggetti squadra
const squadreDiCalcio = [
  { nome: "Palermo", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Genoa", puntiFatti: 0, falliSubiti: 0 },
  
];

for (let squadra of squadreDiCalcio) {
  squadra.puntiFatti = getRandomNumber(0, 100);
  squadra.falliSubiti = getRandomNumber(0, 50);
}
const squadreConNomiEFalli = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log("Squadre di calcio originali:");
console.log(squadreDiCalcio);

console.log("\nSquadre con nomi e falli subiti:");
console.log(squadreConNomiEFalli);
