const nums = [9, 3, 2, 8];
console.log(Math.max(nums));
console.log(Math.max(...nums));

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatb'];
let allPets = [...cats, ...dogs];
console.log(allPets);

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
//{ family: 'Caninae', furry: true, isPet: true }
console.log(dog);

const lion = { ...feline, genus: 'Panthera' };
//{ legs: 4, family: 'Felidae', genus: 'Panthera' }
console.log(lion);