const functions = require('firebase-functions');
const express = require('express'); 
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello world from express`)
});

app.listen(port, (req, res) => {
    console.log(`app started on port: ${port}`); 
})

exports.app = functions.https.onRequest(app);