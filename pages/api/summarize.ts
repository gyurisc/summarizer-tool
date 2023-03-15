// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAIApi(configuration);

type Data = {
  result: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(req.body.message),
        temperature: 0.7,
        max_tokens: 10000,
    });

    console.log(completion);
    
    console.log(completion.data.error);
    res.status(200).json({ result: completion.data.choices[0].text });
}


function generatePrompt(message: string) {
    return `Pretend you are a virtual assistant. Summarize this meeting transcript in alist. Provide key actions at the end. Use full senteneces and professional language. 
    The meeting transcript is: ${message}.`;
}