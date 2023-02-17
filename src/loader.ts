import { readdirSync } from "fs";
import { ApplicationCommandDataResolvable, Client, Collection } from "discord.js";
import { join } from "path";
import { BotEvent, SlashCommand } from "./types";

var CommandsArray: SlashCommand[] = [];
var GuildCommandArray: ApplicationCommandDataResolvable[] = []

function loadevents(client: Client) {
    let eventsdir = join(__dirname, "./events")
    console.log(eventsdir)
    const events = readdirSync(eventsdir).filter(file => file.endsWith('.js'));

    console.log(`\nLoading events...\n`);

    for (const file of events) {
      const event: BotEvent = require(`${eventsdir}/${file}`).default;

      event.once 
      ? client.once(event.name, (...args) => event.execute(...args)) 
      : client.on(event.name, (...args) => event.execute(...args));

      console.log(`-> [Loaded Event] ${event.name}`);
    };
}

function loadslashcmds(client: Client) {
    const slashCommandsDir = join(__dirname, "./slashCommands");
    const commands = readdirSync(slashCommandsDir).filter(file => file.endsWith('.js'));

    console.log(`\nLoading slash commands...\n`);

    client.commands = new Collection();

    for (const file of commands) {
        const command: SlashCommand = require(`${slashCommandsDir}/${file}`).command;
        const cmd: ApplicationCommandDataResolvable = require(`${slashCommandsDir}/${file}`).command;

        CommandsArray.push(command);
        GuildCommandArray.push(cmd)

        console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        console.log(client.application)
    };
}

function loadprefixcmds(client: Client) {
    const prefixcommands = readdirSync('./commands/prefix').filter(file => file.endsWith('.js'));

    console.log(`\nLoading prefix commands...\n`);

    for (const file of prefixcommands) {
        const command = require(`./commands/prefix/${file}`);
        if ((command.name && command.description && command.category) || (command.name && command.description && !command.showHelp)) {
            console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
            delete require.cache[require.resolve(`./commands/prefix/${file}`)];
        } else console.log(`[Failed Command] ${command.name.toLowerCase()}`)
    };
}  

function load(guildid: string, client: Client) {
    client.guilds.cache.get(guildid).commands.set(GuildCommandArray)
}

module.exports.loadevents = (client: Client) => loadevents(client)
module.exports.loadprefixcmds = (client: Client) => loadprefixcmds(client)
module.exports.loadslashcommands = (client: Client) => loadslashcmds(client)
module.exports.load = (guildid: string, client: Client) => load(guildid, client)