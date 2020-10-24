const { Client } = require('discord.js');
const bot = new Client();

let help_schemas = [];

const AddModule = (module) => {
    module.addEvents(bot);

    if(module.help){
        help_schemas = [...help_schemas, module.help];
    }
}

const SetHelpModule = (module) => {
    module.setHelpSchemas(help_schemas);
    AddModule(module);
}

exports.StartBot = (token) => {
    bot.login(token);

    bot.on('ready', () => {
        console.log(`Bot is ready as ${bot.user.tag}`);
    });

    AddModule(require('./commands/commands'));
    AddModule(require('./meet/meet'));
    AddModule(require('./nasa/nasa'));

    SetHelpModule(require('./help/help'));
}
