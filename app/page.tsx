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
		match: string;
		color: "red" | "orange" | "green";
	}
	const segmentNamesArr = [
		"Identify: somewhat",
		"Lifespan: somewhat",
		"Community: not at all",
		"Passions: somewhat",
		"Structure: somewhat",
		"Pressure points: somewhat",
		"Development: well",
		"Support: somewhat",
		"The Barrel: somewhat",
		"Transition Management: well",
		"Strengths: well",
		"Balance: somewhat",
		"Energy flow: not at all",
		"Emotions: not at all",
		"Gut health: somewhat",
		"Body: not at all",
		"Senses: somewhat",
		"Brain: well",
	];

	const determineColour = (match: string) => {
		if (match === "well") {
			return "green";
		} else if (match === "somewhat") {
			return "orange";
		} else if (match === "not at all") {
			return "red";
		}
	};

	const pieData: PieChartData[] = Array(18)
		.fill(null)
		.map((_, i) => {
			const text = segmentNamesArr[i].split(":")[0];
			const match = segmentNamesArr[i].split(":")[1].trimStart();
			return {
				text: text,
				match: match,
				color: determineColour(match) as "red" | "orange" | "green",
			};
		});

	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<img
				className="p-4 m-2 w-1/2 w-500 transition-transform duration-1000 hover:scale-105 hover:brightness-105"
				src="The-Norm_Wheel_WHITE.svg"
				alt="The normal wheel which in white. When you complete the quiz you will see this with colours representing your score"
			/>
			<h1 className="text-3xl font-bold mb-8 text-gray-800">the norm</h1>
			<h2>find and nourish yours now</h2>
			<PieChart data={pieData} width={600} height={600} />
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
