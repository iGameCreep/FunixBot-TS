import { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"
import { pxCommand } from "../types";

export const command: pxCommand = {
    name: 'gnou',
    description: 'Commande secrète :eyes:',
    categorie: 'Secret',
    showHelp: false,
    run: async (client, message, args) => {
        await message.reply({ 
            content: `Alors c'est l'histoire d'un gnou qui se balade dans la savane et qui croise un autre groupe de gnou.\nL'autre groupe de gnou le voyant tout seul lui a donc demandé : \nEh viens avec gnou :water_buffalo:`,
        })
    }
}