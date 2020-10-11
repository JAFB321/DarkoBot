require('dotenv').config();

const { Client } = require('discord.js');
const config = require('./botconfig.json');

const bot = new Client();

bot.on('ready', () => {
  console.log(`Bot is ready as ${bot.user.tag}`);
});

bot.on('message', (message) => {

    const mensaje = message.content;
    if (mensaje.includes('ahhh')) {
      message.channel.send('/tts me falta el aire');
      message.channel.send('y el corazon tucum tucum tucum');      
    }

    if(mensaje.includes('mi avatar')){
      message.reply(message.author.displayAvatarURL());
    }



});
bot.login(process.env.BotToken);
