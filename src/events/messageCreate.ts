import {  Events, Message } from "discord.js";

export default {
    type: Events.MessageCreate,
    once: false,
    execute
}

async function execute(message: Message) {
    console.log(message.content);
    if(message.content.startsWith('darko')) return message.reply('Hola soy Darkobot');
}
