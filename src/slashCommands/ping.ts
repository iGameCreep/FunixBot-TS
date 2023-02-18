import { EmbedBuilder, InteractionType } from "discord.js"
import { Command } from "../types";
import ms from "ms";

export const command: Command = {
    name: 'ping',
    description: 'Renvoi le ping du bot !',
    categorie: 'Informations',
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Pong 🏓 !")
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`La latence de l'API est de ${Math.round(client.ws.ping)}ms 🛰️, Dernier ping calculé il y a ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}.`)
        .setTimestamp()
        .setFooter({
            text: interaction.user.username ? interaction.user.username : `${interaction.user.username}#${interaction.user.discriminator}`,
            iconURL: interaction.user.displayAvatarURL({dynamic: true})
        })
        await interaction.reply({
            embeds: [ embed ]
        })
    }
}