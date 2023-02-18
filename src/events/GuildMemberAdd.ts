import { Client, EmbedBuilder, Events, Guild, GuildMember } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.GuildMemberAdd,
    execute(client: Client, member: (GuildMember | any)) {

        const username: any = member.user.tag

        const params: any = {
            name: username,
            iconURL: member.displayAvatarURL({ dynamic: true }),
        }

        const embed = new EmbedBuilder()
        .setAuthor(params)
        .setColor('#00ff00')
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setDescription(`${username} a rejoint le discord.`)

        member.guild.channels.cache.get(process.env.CHANNEL_ID).send({ embeds: [ embed ] })

    }
}

export default event;