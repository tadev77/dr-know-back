import dotenv from "dotenv";
import { AzureOpenAI } from "openai";
import { studentDataPrompt } from "./generatePrompt.js";

dotenv.config();

const systemMessage = "You are a student performance assistant, and you need to generate insights for the student based on the data provided.";

export const completion = async (userId) => {
    // Get environment variables
    const azureOpenAIKey = process.env.AZURE_OPENAI_KEY;
    const azureOpenAIEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const azureOpenAIDeployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
    const azureOpenAIVersion = process.env.OPENAI_API_VERSION;

    // Check env variables
    if (!azureOpenAIKey || !azureOpenAIEndpoint || !azureOpenAIDeployment || !azureOpenAIVersion) {
        throw new Error(
            "Please set AZURE_OPENAI_KEY and AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_DEPLOYMENT_NAME in your environment variables."
        );
    }

    // Get Azure SDK client
    const getClient = () => {
        return new AzureOpenAI({
            endpoint: azureOpenAIEndpoint,
            apiVersion: azureOpenAIVersion,
            apiKey: azureOpenAIKey,
        });
    };

    const client = getClient();

    const prompt = await studentDataPrompt(userId);

    const result = await client.chat.completions.create({
        model: azureOpenAIDeployment,
        response_format: {"type": "json_object"},
        messages: [
            {"role": "system", "content": systemMessage},
            {"role": "user", "content": prompt}
        ]
    });

    let response = '';

    // If the JSON is too big, we need to iterate over the
    for (const choice of result.choices) {
        response += choice.message.content;
    }

    return response
}