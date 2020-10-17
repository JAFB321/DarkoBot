const { MessageEmbed } = require('discord.js');

const { prefix } = require('../botconfig.json');
const { DailyImage } = require('./NasaAPI');

exports.addEvents = (bot) => {

    bot.on('message', async (message) => {

        const msg = message.content;
        const menciones = message.mentions.users;
        const [_prefix = '', command = '', ...params] = msg.split(' ');

        if (_prefix !== prefix) return;

        if (command === 'nasa') {
            const res = new MessageEmbed();

            if (params[0] === 'daily') {
                const data = await DailyImage();
                const { title, url, hdurl, explanation, date } = data;
                
                if(url){
                    res.title = title;
                    res.setImage(url);
                    res.description = explanation+"\n";
                    res.description += `\nImagen HD: ${hdurl}`;
                }
                
            }

            message.channel.send(res || 'Comando invalido o no hay contenido');
        }

    });

    const AutoDailyImageSender = async() => {        
        // const { Client } = require('discord.js');
        // const bot1 = new Client();
        // bot1.channels.
        
        // const channel = await bot.channels.fetch('763634332765388811');
        // console.log(channel);
        // console.log(bot.channels);
        
        
    }

    AutoDailyImageSender();

}

