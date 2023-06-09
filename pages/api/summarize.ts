// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";


if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

type Data = {
  result: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(req.body.message),
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 800,
      n: 1,
    });

    return res.status(200).json({ result: completion.data.choices[0].text });
  }
  catch (e) {
    console.log(e);
  }
}


function generatePrompt(message: string) {
  return `Pretend you are a virtual assistant. Summarize this meeting transcript. Provide key actions at the end. Use full senteneces and professional language. 
    The meeting transcript is: ${message}.`;
}