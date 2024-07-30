"use client";
import { ModeToggle } from "@/components/modetoggle";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import PieChart from "@/components/ui/PieChart";
//import Image from 'next/image';

export default function Home() {
	interface PieChartData {
		text: string;
		color: "red" | "orange" | "green";
	}
	const segmentNamesArr = [
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
		"Strengths",
		"Balance",
		"Energy Flow",
		"Emotions",
		"Gut Health",
		"Body",
		"Senses",
		"Brain",
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

	const handleSegmentClick = (index: number) => {
		console.log(`Segment ${index + 1} clicked`);
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<img
				className="p-4 m-2 w-1/2 w-500 transition-transform duration-1000 hover:scale-105 hover:brightness-105"
				src="The-Norm_Wheel_MAIN_All-Colours_1.svg"
				alt=""
			/>
			<h1 className="text-3xl font-bold mb-8 text-gray-800">the norm</h1>
			<h2>find and nourish yours now</h2>
			<PieChart
				data={pieData}
				onSegmentClick={handleSegmentClick}
				width={500}
				height={500}
			/>
			{/* <img src="The-Norm_Wheel_WHITE 1.jpg" alt="" /> */}

			{/* <div>
				<ModeToggle />
			</div> */}
			<div>
				<Button variant="default">Start now..</Button>
			</div>
			<div>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
