const { MessageEmbed } = require('discord.js');
const { prefix, GetParams } = require('../../botconfig');

let help_schemas = [];

exports.setHelpSchemas = (schemas) => {
    help_schemas = schemas;
}

exports.addEvents = (bot) => {

    bot.on('message', (message) => {

        const msg = message.content;
        const menciones = message.mentions.users;

        const { _prefix, command, params, validCommand } = GetParams(msg);

        if(!validCommand || command !== 'help') return;

        let res; 

        if (params.length === 0) {
            res = new MessageEmbed();
            
            help_schemas.forEach((schema) => {
                
            });

        }


    });

}