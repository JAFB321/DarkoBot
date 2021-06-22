import { Client, ClientUser } from "discord.js";
import { BotModule } from "./modules/BotModule";

export class DiscordBot {
	private token: string;
	public prefix: string;
	public bot: Client;

	constructor(token: string, prefix: string) {
		this.token = token;
		this.prefix = prefix;
		this.bot = new Client();
	}

	public async init(onInit?: (user?: ClientUser) => void) {
		await this.bot.login(this.token);

		if (onInit) {
			onInit(this.bot.user);
		}
	}

	public AddModule(controller: BotModule) {
		try {
			controller.loadModule(this.bot, this.prefix);
		} catch (error) {}
	}
}
