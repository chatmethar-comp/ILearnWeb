
// const grandient = () => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'red';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'orange';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'yellow';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'green';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'blue';
//                         grandient();
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// grandient();
const delayColor = (color, delay, donext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        donext();
    }, delay)
}

delayColor('pink', 3000, () => console.log('Inside Callback'))