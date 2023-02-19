import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { memoryUsage } from "process";
import { pxCommand } from "../types";

export const command: pxCommand = {
    name: 'me',
    description: 'Renvoi les infos principales de ton compte !',
    categorie: 'Informations',
    run: async (client, message, args) => {

        const author: any = {
            name: message.member.user.tag,
            iconURL: message.member.displayAvatarURL()
        }

        const create = new Date(message.member.user.createdTimestamp)

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setAuthor(author)
        .setThumbnail(message.member.displayAvatarURL())
        .setDescription("Voici donc les infos principales de ton compte.")
        .addFields([
            {
                name: "**Pseudo**",
                value: message.member.user.tag,
            },
            {
                name: "**Date de création**",
                value: `${create.getUTCDay()} ${create.toLocaleString('default', { month: 'long' })} ${create.getUTCFullYear()}`,
            }
        ])

        await message.reply({ embeds: [ embed ] })
    }
}