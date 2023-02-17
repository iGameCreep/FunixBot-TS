import { Client, Events } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    execute(client: Client) {
        console.log((`\n[Ready] Connecté à discord en tant que ${client.user.tag} !\n`))
    }
}

export default event;