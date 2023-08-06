import { Events, Message } from "discord.js";
import { BOT_PREFIX } from "../config";

export default {
    type: Events.MessageCreate,
    once: false,
    execute
}

async function execute(message: Message) {
    console.log(message.content);
    if(message.content.startsWith(BOT_PREFIX)) return message.reply('Hola soy Darkobot');
}
