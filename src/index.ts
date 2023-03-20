import { Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import dotenv from "dotenv";
import { commands } from './commands';
dotenv.config();

const { DISCORD_TOKEN, DISCORD_APP_ID } = process.env
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Login do bot
client.once(Events.ClientReady, c => {
    console.log(`Pronto! Login realizado como ${c.user.tag}`)
});
client.login(DISCORD_TOKEN)

client.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;
    commands.forEach(async (command) => {
        if (interaction.commandName === command.data.name) {
            command.execute(interaction);
        }
    })
});


client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    // instância REST
    const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);
    Guilds.map((guild_id) => {
        // deploy
        (async () => {
            try {

                const saveCommands = commands.map(command => command.data.toJSON())

                console.log(`Resentando ${saveCommands.length} comandos...`)

                // PUT
                const data = await rest.put(
                    Routes.applicationGuildCommands(DISCORD_APP_ID, guild_id),
                    { body: saveCommands }
                )
                console.log("Comandos registrados com sucesso!")
            }
            catch (error) {
                console.error(error)
            }
        })()
    });
});

