// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


const bici = [
  {
    name: "bike 1",
    peso: 10
  },
  {
    name: "bike 2",
    peso: 13
  },
  {
    name: "bike 3",
    peso: 11
  },
  {
    name: "bike 4",
    peso: 9
  },
  {
    name: "bike 5",
    peso: 20
  },
  {
    name: "bike 6",
    peso: 17
  },
];

let lightBike = bici[0]


for (let i = 0; i < bici.length; i++) {
    const bike = bici[i]

    if (bike.peso < lightBike.peso) {
        lightBike = bike
    }
}


console.log(lightBike);




// Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const teams = [
  {
    name: "team 1",
    points: Math.ceil(Math.random() * 10),
    fouls: Math.ceil(Math.random() * 10),
  },
  {
    name: "team 2",
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10),
  },
  {
    name: "team 3",
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10),
  },
  {
    name: "team 4",
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10),
  },
  {
    name: "team 5",
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10),
  },
];

console.log(teams);

const newTeams = []
for (let i = 0; i < teams.length; i++) {
    const team = teams[i]

    console.log(team.name);
    console.log(team.fouls);

    newTeams.push({
        name: team.name,
        fouls: team.fouls
    })
}

console.log(newTeams);

    


