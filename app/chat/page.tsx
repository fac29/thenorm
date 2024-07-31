"use client";

import React from "react";
import type { Metadata } from "next";
import ChatComponent from "@/components/chatcomponent";

// export const metadata: Metadata = {
// 	title: "theNorm",
// 	description: "Your own personal Jo in your pocket",
// };

export default function Chat() {
	return (
		<div>
			<ChatComponent />
		</div>
	);
}
