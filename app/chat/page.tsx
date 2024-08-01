"use client";

import React from "react";
import type { Metadata } from "next";
import AIChat from "@/components/AIChat";

// export const metadata: Metadata = {
// 	title: "theNorm",
// 	description: "Your own personal Jo in your pocket",
// };

export default function Chat() {
	return (
		<div>
			<AIChat />
		</div>
	);
}
