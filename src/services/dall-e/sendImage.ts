import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const { GPT_API_key } = process.env

const sendImage = async (imagePrompt: string): Promise<string> => {
    try {

        const configuration = new Configuration({
            apiKey: GPT_API_key,
        });
        const openai = new OpenAIApi(configuration);

        const image = await openai.createImage({
            prompt: imagePrompt,
            n: 1,
            size: "1024x1024"
        });

        return image.data['data'][0]['url'];
    } catch (error) {
        console.log(error)
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_soltQgNsUcT03s2TJjUKbWlTttyyQUEFg&usqp=CAU";
    }
}

export { sendImage }