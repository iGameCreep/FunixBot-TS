import { Client, EmbedBuilder } from 'discord.js'
import fetch from 'node-fetch'

const { GUILD_ID, CHANNEL_ID, ROLE_ID } = process.env

module.exports = (client: Client) => {
    setTimeout(() => {
        const response = fetch('https://api.funixgaming.fr/twitch/streams/funix', { method: 'GET' })

        response.then((res) => {
            const data = res.json()

            data.then((data) => {
                if (data.data.length === 0) return;
                const name = data.data.user_name
                const title = data.data.title
                const game = data.data.game_name

                const guild = client.guilds.cache.get(GUILD_ID)
                const channel: any = guild.channels.cache.get(CHANNEL_ID)

                const embed = new EmbedBuilder()
                .setColor('Purple')
                .setTitle(`${name} est en live !`)
                .addFields([
                    {
                        name: "**Titre du live :**",
                        value: title
                    },
                    {
                        name: "**Jeu :**",
                        value: game
                    },
                    {
                        name: "**Lien :**",
                        value: `https://twitch.tv/${name}`
                    }
                ])
                .setFooter({ text: 'Notification de stream', iconURL: client.user.avatarURL() })

                channel.send({ content: `${name} est en live sur Twitch ! <@&${ROLE_ID}>`, embeds: [ embed ] })

            })
        })
    }, 60000)
}
