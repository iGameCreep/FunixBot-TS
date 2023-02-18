import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv'
const loader = require('./loader')
const getstream = require('./getstream')

dotenv.config()

const client: Client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ]
});

loader.loadevents(client)

getstream(client)

client.login(process.env.TOKEN)