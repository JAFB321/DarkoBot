const { Client } = require('discord.js');
const bot = new Client();

const AddModule = (module) => {
    module.addEvents(bot);
}

exports.StartBot = (token) => {
    bot.login(token);

    bot.on('ready', () => {
        console.log(`Bot is ready as ${bot.user.tag}`);
    });

    AddModule(require('./messages'));
    AddModule(require('./meet/meet'));
    AddModule(require('./nasa/nasa'));
}