import React from "react";
import { Metadata } from "next";
import AIChat from "@/components/AIChat";

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
};

export default function Chat() {
	return (
		<div className="min-h-[69vh]">
			<AIChat />
		</div>
	);
}
