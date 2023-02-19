import { EmbedBuilder, InteractionType } from "discord.js"
import { Command } from "../types";
import ms from "ms";

export const command: Command = {
    name: 'ping',
    description: 'Renvoi le ping du bot !',
    categorie: 'Informations',
    showHelp: true,
    run: async (client, interaction) => {

        const imgopts: any = {
            dynamic: true
        }

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Pong 🏓 !")
        .setThumbnail(client.user.displayAvatarURL(imgopts))
        .setDescription(`La latence de l'API est de ${Math.round(client.ws.ping)}ms 🛰️.`)
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