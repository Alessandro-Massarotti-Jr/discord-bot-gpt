
import { CommandInterface } from "./CommandInterface";
import fs from "fs"

function loadCommands(): CommandInterface[] {
    const commands: CommandInterface[] = [];
    fs.readdir(__dirname + "/commands", (error, filenames) => {
        filenames.map((filename) => {
            const { command } = require(`./commands/${filename}`);
            if (command) {
                commands.push(command);
            }
        })
    });
    return commands;
}

const commands = loadCommands();

export { commands }