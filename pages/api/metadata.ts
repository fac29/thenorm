// pages/api/metadata.ts

import { NextApiRequest, NextApiResponse } from "next";
import ogs from "open-graph-scraper";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { url } = req.query;

	if (typeof url !== "string") {
		return res.status(400).json({ error: "Invalid URL" });
	}

	try {
		const { result } = await ogs({ url });
		const metadata = {
			title: result.ogTitle || "No title",
			description: result.ogDescription || "No description available",
			// Safely accessing the first image URL if available
			image:
				Array.isArray(result.ogImage) && result.ogImage.length > 0
					? result.ogImage[0].url
					: "",
		};

		res.status(200).json(metadata);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch metadata" });
	}
}
