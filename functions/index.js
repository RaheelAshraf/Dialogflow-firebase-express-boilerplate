const functions = require('firebase-functions');
const express = require('express');
const port = 3000;
const { WebhookClient } = require('dialogflow-fulfillment');
const app = express();

app.post('/webhook', (request, response) => {

    const _agent = new WebhookClient({ request: request, response: response });

    function welcome(agent) {
        agent.add('welcome from express/firebase webhook');
    }

    function fallback(agent) {
        agent.add(`I didn't understand.`);
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    _agent.handleRequest(intentMap);
})

app.listen(port, (req, res) => {
    console.log(`app started on port: ${port}`);
})

exports.app = functions.https.onRequest(app);