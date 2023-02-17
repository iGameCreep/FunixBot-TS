import { EmbedBuilder, InteractionType, Events, Client, ChatInputCommandInteraction } from 'discord.js'
import { BotEvent, Command } from "../types";
const Commands = require('../loader').commands

const event: BotEvent = {
    name: Events.InteractionCreate,
    execute(client: Client, interaction: ChatInputCommandInteraction) {
        if (interaction.type === InteractionType.ApplicationCommand) {
            const command: Command = Commands.find((c: Command) => c.name === interaction.commandName);

            if (!command) return interaction.reply({ content: `❌| Une erreur est survenue ${interaction.member}... Réessaie plus tard...`, ephemeral: true });
    
            command.run(client, interaction);
        }
    }
}

export default event;