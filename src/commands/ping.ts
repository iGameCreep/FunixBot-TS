import { EmbedBuilder, InteractionType, Client, Message} from "discord.js"
import { pxCommand } from "../types";
import ms from "ms";

export const command: pxCommand = {
    name: 'ping',
    description: 'Big command',
    run: async (client, message, args) => {

        const embed: any = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Pong 🏓 !")
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`La latence de l'API est de ${Math.round(client.ws.ping)}ms 🛰️, Dernier ping calculé il y a ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true }).replace('seconds', 'secondes')}.`)
        .setTimestamp()
        .setFooter({
            text: message.member.user.username ? message.member.user.username : `${message.member.user.username}#${message.member.user.discriminator}`,
            iconURL: message.member.user.displayAvatarURL()
        })

        await message.reply({ embeds: [ embed ]})
    }
}