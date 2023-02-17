import { EmbedBuilder, InteractionType, Client, Message} from "discord.js"
import { pxCommand } from "../types";
import ms from "ms";

export const command: pxCommand = {
    name: 'ping',
    description: 'Big command',
    run: async (client, message, args) => {
        await message.reply(`Vu que c'est giga bien fait avecle typescript bah jpeux pas envoyer d'embeds donc t'es obligé d'utiliser les commandes slash bg.`)
    }
}