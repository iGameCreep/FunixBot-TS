import { Client, Events } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.ClientReady,
    execute(client: Client) {
        require('../loader').loadslashcommands(client)
        require('../loader').loadprefixcommands(client)
        
        console.log((`\n[Ready] Connecté à discord en tant que ${client.user.tag} !\n`))
    }
}

export default event;