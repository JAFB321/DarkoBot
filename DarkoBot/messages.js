const { prefix } = require('./botconfig.json');

exports.addEvents = (bot) => {

    bot.on('message', (message) => {

        const msg = message.content;
        if (msg.includes('ahhh')) {
            message.channel.send('me falta el aire');
            message.channel.send('y el corazon tucum tucum tucum');
        }

        if (msg.includes('mi avatar')) {
            message.reply(message.author.displayAvatarURL());
        }

        if (msg.includes(`${prefix} que coma verga`)) {
            let mention = message.mentions.users.first();
            let name = mention.username;

            message.channel.send(`Oye ${name}, come verga pendejo`);
        }

    });

}
