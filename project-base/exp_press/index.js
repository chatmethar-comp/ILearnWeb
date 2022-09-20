const { response } = require("express");
const express = require("express");
const app = express();
// app.use((request, response) => {
//     console.log("We got a new request");
//     response.send('<h1>head</h1>');
// })

app.get('/', (request, response) => {
    response.send('<h1>This is home page</h1>')
})

app.get('/r/:seddit', (request, response) => {
    const { seddit } = request.params;
    response.send(`<h1> Browsing ${seddit} </h1>`)
})

app.get('/r/:seddit/:postID', (request, response) => {
    const { seddit, postID } = request.params;
    response.send(`<h2> Browsing ${postID} ID</h2>`);
})

app.get('/cats', (request, response) => {
    console.log("cat request");
    response.send('<h1>CATS</h1>')
})

app.get('/search', (request, response) => {
    const { q } = request.query;
    if (!q) {
        response.send('Nothing found if nothing search')
    } else {

        response.send(`<h1>search ${q}</h1>`)
    }
})

app.post('/dogs', (request, response) => {
    response.send('Woof')
})

app.get('*', (request, response) => {
    response.send('I don\'t know that path')
})

app.listen(8000, () => {
    console.log("Listening on port 8000")

})