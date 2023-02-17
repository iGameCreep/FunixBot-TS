import { Client, Events } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.ClientReady,
    execute(client: Client) {
        console.log((`\n[Ready] Connecté à discord en tant que ${client.user.tag} !\n`))

        require('../loader').loadslashcommands(client)
    }
}

export default event;