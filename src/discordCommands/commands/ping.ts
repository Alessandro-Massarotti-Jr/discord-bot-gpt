import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { CommandInterface } from "../CommandInterface";

const pingCommand: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Pong!"),

    async execute(interaction: ChatInputCommandInteraction<CacheType>) {
        await interaction.reply('Pong!');
    }
}

export { pingCommand as command }