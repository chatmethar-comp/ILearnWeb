const form = document.getElementById('searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.q.value;
    const config = { params: { q: searchTerm } };
    const req = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
    makeImg(req.data);
    form.elements.q.value = ''
})

const makeImg = (shows) => {
    console.log(shows);
    for (let result of shows) {
        if (result.show.image) {
            const image = document.createElement('img');
            image.src = result.show.image.medium;
            document.body.append(image);
        }
    }

}