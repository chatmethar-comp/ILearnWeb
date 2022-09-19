// fetch("https://swapi.dev/api/people/1/")
//     .then((response) => {
//         console.log("resolved", response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log("data here", data);
//     })
//     .catch((e) => {
//         console.log("error", e);
//     })


// fetch("https://swapi.dev/api/people/1/")
//     .then((response) => {
//         console.log("resolved", response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log("data here", data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((response) => {
//         console.log("resolved", response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data here", data);
//     })
//     .catch((e) => {
//         console.log("error", e);
//     })


// MUCH CLEANER
const loadSWpeople = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`);
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }

}