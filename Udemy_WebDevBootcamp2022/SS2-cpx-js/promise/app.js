// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.5) {
//                 resolve('Your fake data here!');
//             }
//             reject('request error');

//         }, 2000);
//     })
// }


// fakeRequest('/dog/1')
//     .then((data) => {
//         console.log(`done with request`, data);
//     }).catch((e) => {
//         console.log('oh no!', e);
//     })

const delayedColor = (color, delay) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// delayedColor('red', 1000)
//     .then(() => delayedColor('green', 1000))
//     .then(() => delayedColor('blue', 1000))

const rainbox = async () => {
    await delayedColor("red", 1000);
    await delayedColor("orange", 1000);
    await delayedColor("yellow", 1000);
    console.log('Yellow');
    await delayedColor("green", 1000);
    await delayedColor("blue", 1000);
    await delayedColor("purple", 1000);
    return "All Done"
}

rainbox().then((data) => {
    console.log("End of Rainbox", data);
})