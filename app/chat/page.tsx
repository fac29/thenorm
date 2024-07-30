"use client";

import React from "react";
import type { Metadata } from "next";
import ChatBot from "@/components/component/chatbot";

// export const metadata: Metadata = {
// 	title: "theNorm",
// 	description: "Your own personal Jo in your pocket",
// };

export default function Chat() {
	return (
		<div>
			<ChatBot />
		</div>
	);
}
