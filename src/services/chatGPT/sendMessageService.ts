import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const { GPT_API_key } = process.env

const sendMessage = async (message: string): Promise<string> => {
    try {

        const configuration = new Configuration({
            apiKey: GPT_API_key,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.6,
            stream: false,
            max_tokens: 4000
        });

        return completion.data.choices[0].text;
    } catch (error) {
        console.log(error)
        return "Ops parece que ocorreu um erro";
    }
}

export { sendMessage }