import { Client, Events } from "discord.js";

export default {
    type: Events.ClientReady,
    once: true,
    execute
}

async function execute(client: Client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
}