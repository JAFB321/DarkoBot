const { prefix } = require('./botconfig.json');

exports.addEvents = (bot) => {

    bot.on('message', (message) => {

        const msg = message.content;
        const menciones = message.mentions.users;
        const [_prefix = '', command = '', ...params] = msg.split(' ');

        if (_prefix !== prefix) return;


        if (command === 'ahh') {
            message.channel.send('me falta el aire');
            message.channel.send('y el corazon tucum tucum tucum');
        }

        if (command === 'avatar') {
            
            if(menciones.size > 0){
                menciones.each(user => {
                    message.channel.send(user.displayAvatarURL());
                });                
            }
            else{
                message.channel.send(message.author.displayAvatarURL());
            }

            
        }

        if (command === 'hate') {
            let mention = message.mentions.users.first();
            let name = mention.username;

            message.channel.send(`Oye ${name}, come verga pendejo`);
        }

    });

}
