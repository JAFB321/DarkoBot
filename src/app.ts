import type { DiscordClient } from "./types/discord";
import { BOT_TOKEN } from "./config";
import { Client, Collection, GatewayIntentBits } from "discord.js";
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
