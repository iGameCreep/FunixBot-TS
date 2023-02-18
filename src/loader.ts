import { readdirSync, readdir } from "fs";
import { ApplicationCommandDataResolvable, Client, Collection, ApplicationCommandData, ApplicationCommand } from "discord.js";
import { join } from "path";
import { BotEvent, Command, pxCommand } from "./types";

var Commands: Command[] = []
var pxCommands: pxCommand[] = []

function loadevents(client: Client) {
    let eventsdir = join(__dirname, "./events")
    const events = readdirSync(eventsdir).filter(file => file.endsWith('.js'));

    console.log(`\n--> [Loader] Loading events...\n`);

    for (const file of events) {
      const event: BotEvent = require(`${eventsdir}/${file}`).default;

      client.on(event.name, (...args) => event.execute(client, ...args));

      console.log(`-> [Loaded Event] ${event.name}`);
    };
}

function loadslashcmds(client: Client) {
    const slashCommandsDir = join(__dirname, "./slashCommands");
    const commands = readdirSync(slashCommandsDir).filter(file => file.endsWith('.js'));

    console.log(`\n--> [Loader (/)] Loading slash commands...\n`);

    for (const file of commands) {
        const command: Command = require(`${slashCommandsDir}/${file}`).command;

        Commands.push(command)

        console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
        client.application.commands.set(Commands);
    };
}

function loadprefixcmds(client: Client) {
    const commandsdir = join(__dirname, `./commands`);

    console.log(`\n-->[Loader (!)] Loading prefix commands...\n`);

    client.commands = new Collection();

    readdir(commandsdir, function(err, files) {
        for (const file of files) {
            const command: pxCommand = require(`${commandsdir}\\${file}`).command;
    
            pxCommands.push(command)
          
            console.log(`-> [Loaded Command] ${command.name.toLowerCase()}`);
            client.commands.set(pxCommands)
        }; 
    });
}  

function load(guildid: string, client: Client) {
    client.guilds.cache.get(guildid).commands.set(Commands)
}

module.exports.loadevents = (client: Client) => loadevents(client)
module.exports.loadprefixcommands = (client: Client) => loadprefixcmds(client)
module.exports.loadslashcommands = (client: Client) => loadslashcmds(client)
module.exports.load = (guildid: string, client: Client) => load(guildid, client)

module.exports.commands = Commands
module.exports.pxCommands = pxCommands