import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface ICommandInterface {
    data: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
    execute(interaction: ChatInputCommandInteraction<CacheType>): void
}