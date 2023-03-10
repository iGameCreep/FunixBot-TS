import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { memoryUsage } from "process";
import { pxCommand } from "../types";

export const command: pxCommand = {
    name: 'me',
    description: 'Renvoi les infos principales de ton compte !',
    categorie: 'Informations',
    showHelp: true,
    run: async (client, message, args) => {

        const imgopts: any = {
            dynamic: true
        }

        const author: any = {
            name: message.member.user.tag,
            iconURL: message.member.displayAvatarURL(imgopts)
        }

        const create = new Date(message.member.user.createdTimestamp)

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setAuthor(author)
        .setThumbnail(message.member.displayAvatarURL(imgopts))
        .setDescription("Voici donc les infos principales de ton compte.")
        .addFields([
            {
                name: "**Pseudo**",
                value: message.member.user.tag,
            },
            {
                name: "**Date de création**",
                value: `${create.getDate()} ${create.toLocaleString('default', { month: 'long' })} ${create.getFullYear()}`,
            }
        ])

        await message.reply({ embeds: [ embed ] })
    }
}