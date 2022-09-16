const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
console.log(words.some(word => word.length > 4));
console.log(words.some(word => { word[0] === 'Z' }));
console.log(words.some(word => {
    return word.includes('cake');
}))
