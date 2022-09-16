const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function print(element) {
    console.log(element);
}
numbers.forEach((el) => {
    if (el % 2 == 0) {
        console.log(el);
    }
});

const objs = [
    {
        title: 'Alien',
        score: '90'
    },
    {
        title: 'abcd',
        score: '100'
    },
    {
        title: 'alexan',
        score: '8'
    },
    {
        title: 'arias',
        score: '72'
    },
    {
        title: 'abact',
        score: '60'
    },
    {
        title: 'adam',
        score: '55'
    },
]

objs.forEach((movie) => {
    console.log(`${movie.title} - ${movie.score}`);
})

const newMovie = objs.map((movie) => (`${movie.title} - ${movie.score / 10}`));
console.log(newMovie);

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

const add = (a, b) => (a + b);

console.log(rollDie());
// for (let el of numbers) {
//     console.log(el);
// }