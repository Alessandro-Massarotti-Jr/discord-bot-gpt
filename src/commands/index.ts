import { chatGptCommand } from "./chat-gpt";
import { ICommandInterface } from "./ICommandInterface";
import { pingCommand } from "./ping";

const commands: ICommandInterface[] = [pingCommand, chatGptCommand];

export { commands }