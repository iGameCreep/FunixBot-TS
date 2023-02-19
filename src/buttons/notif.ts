import { Client, Role } from 'discord.js'
import { button } from '../types'

const { TWITCH_ROLE_ID, YTB_ROLE_ID, TIKTOK_ROLE_ID } = process.env

const button: button = {
    id: 'notif',
    async execute(client, interaction) {
        const arg: string = interaction.customId.split('-')[1]
        const member = interaction.member

        const twitchrole = interaction.guild.roles.cache.get(TWITCH_ROLE_ID)
        const ytbrole = interaction.guild.roles.cache.get(YTB_ROLE_ID)
        const tiktokrole = interaction.guild.roles.cache.get(TIKTOK_ROLE_ID)

        function removerolemsg(id: string) {
            return `Le rôle <@&${id}> t'a été supprimé avec succès !`
        }
        function addrolemsg(id: string) {
            return `Le rôle <@&${id}> t'a été ajouté avec succès !`
        }

        switch (arg) {
            case "twitch":
                if (member.roles.cache.find((role: Role) => role.id === TWITCH_ROLE_ID)) {
                    member.roles.remove(TWITCH_ROLE_ID);
                    return interaction.reply({ content: removerolemsg(twitchrole.id), ephemeral: true });
                } else {
                    member.roles.add(TWITCH_ROLE_ID);
                    return interaction.reply({ content: addrolemsg(twitchrole.id), ephemeral: true });
                }
            case "youtube":
                if (member.roles.cache.find((role: Role) => role.id === YTB_ROLE_ID)) {
                    member.roles.remove(YTB_ROLE_ID);
                    return interaction.reply({ content: removerolemsg(ytbrole.id), ephemeral: true });
                } else {
                    member.roles.add(YTB_ROLE_ID);
                    return interaction.reply({ content: addrolemsg(ytbrole.id), ephemeral: true });
                }
            case "tiktok":
                if (member.roles.cache.find((role: Role) => role.id === TIKTOK_ROLE_ID)) {
                    member.roles.remove(TIKTOK_ROLE_ID);
                    return interaction.reply({ content: removerolemsg(tiktokrole.id), ephemeral: true });
                } else {
                    member.roles.add(TIKTOK_ROLE_ID);
                    return interaction.reply({ content: addrolemsg(tiktokrole.id), ephemeral: true });
                }
        }
    },
}

export default button;