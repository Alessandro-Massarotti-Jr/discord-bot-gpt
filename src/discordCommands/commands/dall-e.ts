import { CacheType, ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js"
import { sendImage } from "../../services/dall-e/sendImage";
import { CommandInterface } from "../CommandInterface";

const dallECommand: CommandInterface = {

    data: new SlashCommandBuilder()
        .setName("dall-e")
        .setDescription("Gera uma imagem com o dall-e")
        .addStringOption((option) => {
            return option.setName('prompt')
                .setDescription('Texto com informação da imagem a ser gerada')
                .setRequired(true)
        }),

    async execute(interaction: ChatInputCommandInteraction<CacheType>) {
        const interactionMessage = interaction.options.get("prompt").value;
        interaction.deferReply();
        const dallEResponse = await sendImage(interactionMessage as string)
        const exampleEmbed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Resposta Dall-e")
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
            .setDescription(`Imagem para o prompt: ${interactionMessage}`)
            .setImage(dallEResponse);
        await interaction.editReply({ embeds: [exampleEmbed] });
    }
}

export { dallECommand as command }