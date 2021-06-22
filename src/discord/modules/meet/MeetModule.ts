import { MessageEmbed } from "discord.js";

import { BotModule } from "../BotModule";
import { GetParams } from "../helpers";

import { clases } from "./meet.json";

export class MeetModule extends BotModule {
	init() {
		this.bot.on("message", (message) => {
			const msg = message.content;
			const menciones = message.mentions.users;
			const { _prefix, command, params, validCommand } = GetParams(msg, this.prefix);

			if (!validCommand || command !== "meet") return;

			const res = new MessageEmbed();
			let filter = "";

			if (params && params.length > 0) {
				filter = params.toString().replace(",", " ");
				res.setTitle("Clases");
				res.description = "";
				res.setColor("#32a852");

				clases.forEach((clase) => {
					const { ID, nombre, profe, link } = clase;

					if (
						(ID + nombre + profe).toLowerCase().includes(filter.toLowerCase())
					) {
						// res.setDescription(`${nombre}: ${link}`);
						res.description += `${nombre}: ${link}\n`;
					}
				});
			} else if (params.length === 0 || true) {
				res.setTitle("Todas las clases");
				res.description = "";
				res.setColor("#32a852");

				clases.forEach((clase) => {
					const { ID, nombre, profe, link } = clase;
					res.description += `${nombre}: ${link}\n`;
				});
			}

			message.channel.send(res || "No existe la clase");
		});
	}
}
