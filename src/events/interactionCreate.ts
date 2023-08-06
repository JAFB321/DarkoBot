import type { DiscordClient } from "../types/discord";
import { Events, Interaction } from "discord.js";

export default {
    type: Events.InteractionCreate,
    once: false,
    execute
}

async function execute(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;
	
	const { commands, cooldowns } = interaction.client as DiscordClient
	
	const command = commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}
	
	const timestamps = cooldowns.get(command.data.name);
	const defaultCooldown = 3;
	const cooldownDuration = (command.cooldown || defaultCooldown) * 1000;

	if (timestamps.has(interaction.user.id)) {
		const expirationTime = timestamps.get(interaction.user.id) + cooldownDuration;

		if(expirationTime > Date.now()){
			return interaction.reply({ content: `El comando \`${command.data.name}\` tiene ${cooldownDuration/1000} segundos de cooldown culero aguantame a que agarre aire.`, ephemeral: true });
		}
	}

	timestamps.set(interaction.user.id, Date.now());
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownDuration);

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
}