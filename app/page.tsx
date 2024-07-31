"use client";

import { Button } from "@/components/ui/button";

import PieChart from "@/components/PieChart";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-row items-center justify-between">
			<PieChart />
			<h1 className="text-3xl font-bold mb-8 text-gray-800">the norm</h1>
			<h2>find and nourish yours now</h2>
			<div>
				<Button variant="default">Start now..</Button>
			</div>
		</div>
	);
}
