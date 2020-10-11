const { Client } = require('discord.js');
const bot = new Client();

bot.on('ready', () => {
  console.log(`Bot is ready as ${bot.user.tag}`);
  bot.user.setStatus('idle');

});

bot.on('message', (message) => {

    const mensaje = message.content;
    if (mensaje.includes('ahhh')) {
      message.channel.send('me falta el aire');
      message.channel.send('y el corazon tucum tucum tucum');
    }

    if(mensaje.includes('adios')){
      bot.user.setStatus('idle');
    }

    if(mensaje.includes('hola')){
      bot.user.setStatus('online');
    }

});
bot.login('NzMwNTQzOTE0MzU1OTE2ODcx.XwZCCg.fsihaiG49zRrwLeBhYOO7cAyM_s');
