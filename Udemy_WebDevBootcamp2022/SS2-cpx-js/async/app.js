

// const hello = async () => {
//     throw new Error("Uh Oh");
//     return "la la la la";
// };

// // hello2().then((data) => {
// //     console.log("Promise resolved with: ", data);
// // })

// hello()
//     .then((data) => {
//         console.log("Promise resolved with: ", data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

const login = async (username, password) => {
    if (!username || !password) throw "missing Credentials"
    if (password === "boo") return "welcome";
    throw "invalid Password";
}

login('seumo', 'bo')
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })