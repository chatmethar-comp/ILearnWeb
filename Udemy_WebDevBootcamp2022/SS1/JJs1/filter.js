const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odd = nums.filter(n => {
    return n % 2 === 1
})

const smallNums = nums.filter(n => n < 5);

console.log(odd);
console.log(smallNums);