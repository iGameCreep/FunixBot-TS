import { PermissionFlagsBits, PermissionsBitField, BaseCommandInteraction, ChatInputApplicationCommandData, Message } from "discord.js"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string
            TOKEN: string
        }
    }
}

export interface BotEvent {
    name: string,
    async execute: (...args?) => void
}

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, SlashCommand>
    }
}

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}

export interface pxCommand {
    name: string,
    description: string,
    run: (client: Client, message: Message, args: string[]) => void;
}