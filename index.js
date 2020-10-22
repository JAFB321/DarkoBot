require('dotenv').config();
const express = require('express');
const colors = require('colors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {

    const DarkoBot = require('./DarkoBot/DarkoBot');
    DarkoBot.StartBot(process.env.DarkoBotToken);

    console.log(`Server on port ${app.get('port')}`.blue);
});

app.get('/', (req, res) => {
    res.send('DarkoBot Online');    
});

