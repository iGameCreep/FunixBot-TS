import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { Command } from "../types";

export const command: Command = {
    name: 'me',
    description: 'Renvoi les infos principales de ton compte !',
    categorie: 'Informations',
    run: async (client, interaction) => {

        const author: any = {
            name: interaction.member.user.tag,
            iconURL: interaction.member.displayAvatarURL({ dynamic: true })
        }

        const create = new Date(interaction.member.user.createdTimestamp)

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setAuthor(author)
        .setThumbnail(interaction.member.displayAvatarURL({ dynamic: true }))
        .setDescription("Voici donc les infos principales de ton compte.")
        .addFields([
            {
                name: "**Pseudo**",
                value: interaction.member.user.tag,
            },
            {
                name: "**Date de création**",
                value: `${create.getUTCDay()} ${create.toLocaleString('default', { month: 'long' })} ${create.getUTCFullYear()}`,
            }
        ])
        
        await interaction.reply({ embeds: [ embed ] })
    }
}