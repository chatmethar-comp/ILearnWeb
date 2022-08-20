function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5));

const sumAll2 = (...nums) => {
    let total = 0;
    for (let n of nums) total += n;
    return total
}
console.log(sumAll2(1, 2, 3, 4, 5));