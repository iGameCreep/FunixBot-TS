import { Events, Client, Message, ChannelType } from 'discord.js'
import { BotEvent, pxCommand } from "../types";
import { readdirSync, existsSync } from 'fs';
import { join } from "path";

const event: BotEvent = {
    name: Events.MessageCreate,
    execute(client: Client, message: Message) {
        if (message.author.bot || message.channel.type === ChannelType.DM) return;

        const prefix: string = "!"

        if (message.content.indexOf(prefix) !== 0) return;

        const args: string[] = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandname: string = args.shift().toLowerCase();
        const cmdfile: string = `./src/commands/${commandname}.js`
        const path: string = join(__dirname, `../commands/${commandname}` )

        if (!existsSync(cmdfile)) return message.reply({ content: `❌ | La commande \`${commandname}\` n'existe pas !` })

        const command: pxCommand = require(path)

        command.run(client, message, args)

    }
}

export default event;