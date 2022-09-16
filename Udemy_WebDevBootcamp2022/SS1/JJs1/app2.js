function isEven0(num) {
    return num % 2 === 0;
}

const isEven1 = function (num) {
    return num % 2 === 0;
}

const isEven2 = (num) => {
    return num % 2 === 0;
}

const isEven3 = num => (num % 2 == 0);

const isEven4 = num => {
    return num % 2 == 0;
}

console.log(isEven0(4));
console.log(isEven1(4));
console.log(isEven2(4));
console.log(isEven3(4));
console.log(isEven4(4));