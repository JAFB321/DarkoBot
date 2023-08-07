import type { DiscordClient } from "./types/discord";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { APP_URL, BOT_TOKEN, PORT, RENDER_TIMEOUT_SLEEP } from "./config";
import fetch from "node-fetch";
import express from "express";
import { commands } from "./commands";
import { events } from "./events";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
}) as DiscordClient;

// Set up commands
client.commands = new Collection();
client.cooldowns = new Collection();

for (const command of commands) {
  client.commands.set(command.data.name, command);
  client.cooldowns.set(command.data.name, new Collection());
}

// Set up events
for (const event of events) {
  if (event.once) {
    client.once(event.type, (...args) => event.execute(...args));
  } else {
    client.on(event.type, (...args) => event.execute(...args));
  }
}

// Log in to Discord
client.login(BOT_TOKEN);

// Set up express server
const app = express();
app.listen(PORT, () => console.log(`Http server running on port ${PORT}`))

app.get('/reset-timeout', (req, res) => {
  console.log('Timeout reset');
  res.send('Darkobot is running');
})

// Avoid free hosting sleep
async function AutoCallLoop() {
  if (APP_URL) {
		await fetch(APP_URL+'/reset-timeout').catch(console.error);
	}
	setTimeout(() => {
		AutoCallLoop();
	}, RENDER_TIMEOUT_SLEEP*1000);
}
AutoCallLoop();
