import { Client, Events, Guild } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.GuildCreate,
    execute(client: Client, guild: Guild) {
        require('../loader').load(guild.id, client)
    }
}

export default event;