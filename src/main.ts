import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv'
const loader = require('./loader')

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

client.login(process.env.TOKEN)