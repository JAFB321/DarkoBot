const { MessageEmbed } = require('discord.js');

const { prefix } = require('../botconfig.json');
const { clases } = require('./meet.json');

exports.addEvents = (bot) => {

    bot.on('message', (message) => {

        const msg = message.content;
        const menciones = message.mentions.users;
        const [_prefix = '', command = '', ...params] = msg.split(' ');

        if (_prefix !== prefix) return;

        if (command === 'meet') {
            const res = new MessageEmbed();
            let filter = '';

            if (params && params.length > 0) {
                filter = params.toString().replace(',', ' ');
                res.setTitle('Clases');
                res.description = '';
                res.setColor('#32a852');
                
                clases.forEach((clase) => {
                    let { ID, nombre, profe, link } = clase;

                    if ((ID + nombre + profe).toLowerCase().includes(filter.toLowerCase())) {
                        // res.setDescription(`${nombre}: ${link}`);
                        res.description += `${nombre}: ${link}\n`;
                    }
                });
            }
            else if (params.length == 0) {
                clases.forEach((clase) => {
                    let { ID, nombre, profe, link } = clase;
                    res += `${nombre}: ${link}\n`;
                });
            }

            message.channel.send(res || 'No existe la clase');
        }

    });

}

