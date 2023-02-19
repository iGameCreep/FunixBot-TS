import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { pxCommand } from "../types";

export const command: pxCommand = {
    name: 'roles',
    description: 'Envoi l\'embed de choix de roles.',
    categorie: 'Configuration',
    showHelp: false,
    run: async (client, message, args) => {

        if (!process.env.ADMINID.includes(message.author.id)) return;

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Choix des rôles")
        .setDescription("Afin d'éviter de faire des tag everyone et here sur le discord, vous pouvez choisir vos rôles pour recevoir les notifications qui vous intéressent.\nVous pouvez d'ailleurs ajouter et retirer votre rôle à tout moment.")
        .addFields([
            {
                name: "<:twitch:1076929000330498058>",
                value: "Les notifications Twitch",
                inline: true
            },
            {
                name: "<:youtube:1076929043154346047>",
                value: "Les notifications YouTube",
                inline: true
            },
            {
                name: "<:tiktok:1076929073516912733>",
                value: "Les notifications TikTok",
                inline: true
            }
        ])

        const twitch = new ButtonBuilder()
        .setCustomId('notif-twitch')
        .setEmoji("<:twitch:1076929000330498058>")
        .setStyle(ButtonStyle.Primary)

        const youtube = new ButtonBuilder()
        .setCustomId('notif-ytb')
        .setEmoji("<:youtube:1076929043154346047>")
        .setStyle(ButtonStyle.Primary)

        const tiktok = new ButtonBuilder()
        .setCustomId('notif-tiktok')
        .setEmoji("<:tiktok:1076929073516912733>")
        .setStyle(ButtonStyle.Primary)
        
        const btns: any = new ActionRowBuilder()
        .addComponents(twitch, youtube, tiktok)

        await message.delete()
        await message.channel.send({ embeds: [ embed ], components: [ btns ] })

    }
}