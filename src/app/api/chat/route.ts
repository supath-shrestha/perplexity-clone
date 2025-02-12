import { NextRequest } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: prompt,
  });

  if (!response) {
    throw new Error("Soemthing went wrong");
  }

  return Response.json({ data: response.choices[0].message });
}
