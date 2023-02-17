import { EmbedBuilder, CommandInteraction, PermissionFlagsBits } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'ping',
    data: {
        name: "ping",
        description: "Returns bot's ping",
        dm: true,
        permissions: null,
        options: null
    },
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Pentiminax" })
                    .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                    .setColor('#ff8e4d')
            ]
        })
    }
}