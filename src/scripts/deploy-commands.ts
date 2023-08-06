import { BOT_CLIENT_ID, BOT_TOKEN } from '../config'
import { REST, Routes }  from 'discord.js'
import { commands } from '../commands'

const commandsData = commands.map(({data}) => data.toJSON())

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(BOT_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data: any = await rest.put(
			Routes.applicationCommands(BOT_CLIENT_ID),
			{ body: commandsData },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();