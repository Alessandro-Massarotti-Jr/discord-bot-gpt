import { CacheType, ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js"
import { sendMessage } from "../services/chatGPT/sendMessageService";
import { ICommandInterface } from "./ICommandInterface";

const chatGptCommand: ICommandInterface = {

    data: new SlashCommandBuilder()
        .setName("chat-gpt")
        .setDescription("Envia uma mensagem para o Chat GPT")
        .addStringOption((option) => {
            return option.setName('mensagem')
                .setDescription('Mensagem a ser enviada')
                .setRequired(true)
        }),

    async execute(interaction: ChatInputCommandInteraction<CacheType>) {
        const interactionMessage = interaction.options.get("mensagem").value;
        interaction.deferReply();
        const gptResponse = await sendMessage(interactionMessage as string)
        const exampleEmbed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Resposta GPT")
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
            .setDescription(`Resposta para a pergunta: ${interactionMessage}`)
            .addFields({ name: "Resposta", value: gptResponse });
        await interaction.editReply({ embeds: [exampleEmbed] });
    }
}

export { chatGptCommand }