import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		try {
			const { messages } = req.body;

			const completion = await openai.chat.completions.create({
				messages: messages,
				model: "gpt-4o-mini",
			});

			res.status(200).json({ response: completion.choices[0].message.content });
		} catch (error) {
			console.error("Error fetching completion:", error);
			res.status(500).json({ error: "Failed to fetch completion" });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
