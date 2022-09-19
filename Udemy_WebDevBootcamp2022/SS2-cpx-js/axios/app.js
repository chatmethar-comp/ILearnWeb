const loadax = async () => {
    const req = await axios.get("https://swapi.dev/api/people/1/");
    let data = req.data;
    console.log(data);
}

const getDadJokes = async () => {
    try {
        const req = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
        });
        return req.data.joke
    } catch (e) {
        return "No joke available";
    }
}

document.getElementById('joke').addEventListener('click', async () => {
    let joke = await getDadJokes();
    const label = document.querySelector('.result');
    newLI = document.createElement('li');
    newLI.innerHTML = joke;
    label.append(newLI);
})