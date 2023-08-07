import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  execute,
  cooldown: 5
};


async function execute(interaction: CommandInteraction) {
  await interaction.reply("Pong!");
} 

