import type { Client, Collection, CommandInteraction, SlashCommandBuilder } from 'discord.js'

export type CommandExecute = (interaction: CommandInteraction) => any

export interface Command {
  data: SlashCommandBuilder,
  execute: CommandExecute,
  cooldown?: number
}

export interface Event {
  type: string,
  once: boolean,
  execute: (...args: any[]) => any
}

/** Cooldown collection has the user id as key and last use timestamp as value */
export type CooldownTimestamp = Collection <string, number>

export interface DiscordClient extends Client {
  /** Commands collection has the command name as key and Command itstelf as value */
  commands?: Collection<string, Command>
  /** Cooldown collection has the command name as key and CooldownTimestamp as value */
  cooldowns?: Collection<string, CooldownTimestamp>
}
