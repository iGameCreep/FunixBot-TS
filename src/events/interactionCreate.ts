import { EmbedBuilder, InteractionType, Events, Client, ChatInputCommandInteraction, ButtonInteraction, GuildMember } from 'discord.js'
import { join } from 'path';
import { BotEvent, button, Command } from "../types";
import { existsSync, readdir } from 'fs';
const Commands = require('../loader').commands

const event: BotEvent = {
    name: Events.InteractionCreate,
    execute(client: Client, interaction: (ChatInputCommandInteraction | ButtonInteraction)) {
        if (interaction.type === InteractionType.ApplicationCommand) {
            const command: Command = Commands.find((c: Command) => c.name === interaction.commandName);

            if (!command) return interaction.reply({ content: `❌| Une erreur est survenue ${interaction.member}... Réessaie plus tard...`, ephemeral: true });
    
            command.run(client, interaction);
        } else if (interaction.type === InteractionType.MessageComponent) {
            const id = interaction.customId.split('-')[0]
            const btnfile = join(__dirname, `../buttons/${id}.js`)

            if (!existsSync(btnfile)) return interaction.reply({ content: `Une erreur est survenue: je n'arrive pas à trouver ce bouton !`, ephemeral: true })

            const button: button = require(`../buttons/${id}.js`).default

            button.execute(client, interaction)
        }

    }
}

export default event;