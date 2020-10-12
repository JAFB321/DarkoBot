require('dotenv').config();

const DarkoBot = require('./DarkoBot/DarkoBot');
DarkoBot.StartBot(process.env.DarkoBotToken);




