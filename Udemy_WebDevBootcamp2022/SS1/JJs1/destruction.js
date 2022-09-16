const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'abc'];
const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);

const [fastest, ...everyoneElse] = raceResults;
console.log(fastest);
console.log(everyoneElse);
// Eliud Kipchoge
// [ 'Feyisa Lelisa', 'Galen Rupp', 'abc' ]