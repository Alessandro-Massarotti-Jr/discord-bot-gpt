import { chatGptCommand } from "./chat-gpt";
import { dallECommand } from "./dall-e";
import { ICommandInterface } from "./ICommandInterface";
import { pingCommand } from "./ping";

const commands: ICommandInterface[] = [pingCommand, chatGptCommand, dallECommand];

export { commands }