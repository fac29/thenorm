import React from "react";
import type { Metadata } from "next";

import PieChart from "../../components/ui/PieChart";

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
};

export default function Landing() {
	interface PieChartData {
		text: string;
		color: "red" | "orange" | "green";
	}
	const segmentNamesArr = [
		"Body",
		"Senses",
		"Brain",
		"Identity",
		"Lifespan",
		"Tribe",
		"Passion",
		"Structure",
		"Pressure Points",
		"Development",
		"Support",
		"The Barrel",
		"Transition Management",
		"Strength",
		"Balance",
		"Energy Flow",
		"Emotions",
		"Gut Health",
	];
	const pieData: PieChartData[] = Array(18)
		.fill(null)
		.map((_, i) => ({
			text: `${segmentNamesArr[i]}`,
			color: ["red", "orange", "green"][Math.floor(Math.random() * 3)] as
				| "red"
				| "orange"
				| "green",
		}));

	// const handleSegmentClick = (index: number) => {
	//     console.log(`Clicked segment ${index + 1}`);
	//     // Add your click handling logic here
	// };
	return (
		<div>
			<h1>this is the ladning page/component</h1>
			<PieChart
				data={pieData}
				// onSegmentClick={handleSegmentClick}
				width={600}
				height={600}
			/>
		</div>
	);
}
