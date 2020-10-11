const { Client } = require('discord.js');
const bot = new Client();

bot.on('ready', () => console.log(`Bot is ready as ${bot.user.tag}`));
bot.on('message', (message) => {

    const mensaje = message.content;
    if (mensaje.includes('ahhh')) {
		message.channel.send('me falta el aire');
	}

});
bot.login('NzMwNTQzOTE0MzU1OTE2ODcx.XwZCCg.fsihaiG49zRrwLeBhYOO7cAyM_s');
