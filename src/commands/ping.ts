import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommandInterface } from "./ICommandInterface";

const pingCommand: ICommandInterface = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!"),

    async execute(interaction: ChatInputCommandInteraction<CacheType>) {
        await interaction.reply('Pong!');
    }
}

export { pingCommand }