"use client";

import React from "react";
import type { Metadata } from "next";
import LinkPreview from "@/components/LinkPreview";
import { Card } from "@/components/ui/card";

// export const metadata: Metadata = {
// 	title: "theNorm",
// 	description: "Your own personal Jo in your pocket",
// };

const links = [
	"https://www.theguardian.com/uk",
	"https://hackney.gov.uk/",
	"https://www.youtube.com/watch?v=WprLOcEyh6M",
];

export default function Account() {
	return (
		<div>
			<h1>Recommended Resources</h1>
			<Card>
				{links.map((link) => (
					<LinkPreview key={link} url={link} />
				))}
			</Card>
		</div>
	);
}
