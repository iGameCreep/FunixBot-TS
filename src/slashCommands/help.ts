import { EmbedBuilder } from "discord.js"
import { Command } from "../types";

const commands = require('../loader').commands

export const command: Command = {
    name: 'help',
    description: 'Liste toute les commandes du bot !',
    categorie: 'Informations',
    showHelp: true,
    run: async (client, interaction) => {
        const categories = [];

        const imgopts: any = {
            dynamic: true
        }

        commands.forEach((command: Command) => {
            if(!categories.includes(command.categorie) && command.showHelp) {
                categories.push(command.categorie);
            }
        });

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(imgopts) })
        .setDescription('Voici toute les commandes du bot !')
        .setTimestamp()
        .setFooter({ text: interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL(imgopts)});

        categories.sort().forEach((cat, i) => {
            const tCommands = commands.filter((cmd: Command) => cmd.categorie === cat);
            embed.addFields({ name:cat, value: tCommands.map((cmd: Command) => "> `" + cmd.name + "` ➔ " + cmd.description).join("\n") });
        });

        await interaction.reply({ embeds: [ embed ] })
    }
}