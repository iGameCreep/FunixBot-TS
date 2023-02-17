import { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField } from "discord.js"

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
    once?: boolean | false,
    async execute: (...args?) => void
}

export interface SlashCommandData {
    name: string,
    description: string,
    dm: boolean | false,
    permissions: Array<> | null,
    options: Object[] | null
}

export interface SlashCommand {
    name: string,
    data: SlashCommandData,
    async execute: (interaction : CommandInteraction) => Promise<void>,
}

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, SlashCommand>
    }
}