import { Client } from "discord.js";

export class BotModule {
	protected bot: Client;
	protected prefix: string;
	protected keyWord: string;

	constructor(keyWord: string) {
		this.keyWord = keyWord;
	}

	public loadModule(bot: Client, prefix: string) {
		this.bot = bot;
		this.prefix = prefix;
		this.init();
	}

	protected init() {}
}
