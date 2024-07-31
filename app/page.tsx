"use client";
import { ModeToggle } from "@/components/modetoggle";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import PieChart from "@/components/PieChart";

//import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<img
				className="p-4 m-2 w-1/2 w-500 transition-transform duration-1000 hover:scale-105 hover:brightness-105"
				src="The-Norm_Wheel_WHITE.svg"
				alt="The normal wheel which in white. When you complete the quiz you will see this with colours representing your score"
			/>
			<h1 className="text-3xl font-bold mb-8 text-gray-800">the norm</h1>
			<h2>find and nourish yours now</h2>
			<PieChart />
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
