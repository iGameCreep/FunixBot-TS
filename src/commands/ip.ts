import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { pxCommand } from "../types";

export const command: pxCommand = {
    name: 'ip',
    description: 'Renvoi l\'IP et les informations du serveur Minecraft Pacifista !',
    categorie: 'Pacifista',
    showHelp: true,
    run: async (client, message, args) => {

        const btn = new ButtonBuilder()
        .setLabel('Acceder au site web')
        .setURL('https://pacifista.fr')
        .setEmoji('🌐')
        .setStyle(ButtonStyle.Link)

        const btns: any = new ActionRowBuilder()
        .addComponents(btn)

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Pacifista Minecraft")
        .setDescription("Serveur minecraft survie")
        .addFields([
            {
                name: "Site Web",
                value: "https://pacifista.fr",
                inline: true
            },
            {
                name: "IP de connexion",
                value: "play.pacifista.fr",
                inline: true
            },
            {
                name: "Version",
                value: "1.19.2",
                inline: true
            }
        ])

        await message.reply({ embeds: [ embed ], components: [ btns ]})
    }
}