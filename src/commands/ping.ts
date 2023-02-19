import { EmbedBuilder, InteractionType, Client, Message} from "discord.js"
import { pxCommand } from "../types";
import ms from "ms";

export const command: pxCommand = {
    name: 'ping',
    description: 'Renvoi le ping du bot !',
    categorie: 'Informations',
    showHelp: true,
    run: async (client, message, args) => {

        const imgopts: any = {
            dynamic: true
        }

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Pong 🏓 !")
        .setThumbnail(client.user.displayAvatarURL(imgopts))
        .setDescription(`La latence de l'API est de ${Math.round(client.ws.ping)}ms 🛰️.`)
        .setTimestamp()
        .setFooter({
            text: message.member.user.username ? message.member.user.username : `${message.member.user.username}#${message.member.user.discriminator}`,
            iconURL: message.member.user.displayAvatarURL(imgopts)
        })

        await message.reply({ embeds: [ embed ]})
    }
}