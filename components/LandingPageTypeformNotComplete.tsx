"use client";

import { Button } from "@/components/ui/button";

import PieChart from "@/components/PieChart";

interface LandingPageProps {
	completedWheel: boolean;
}

export default function LandingPageTypeFormNotComplete({
	completedWheel,
}: LandingPageProps) {
	const segmentNames = [
		"Identify",
		"Lifespan",
		"Community",
		"Passions",
		"Structure",
		"Pressure points",
		"Development",
		"Support",
		"The Barrel",
		"Transition Management",
		"Strengths",
		"Balance",
		"Energy flow",
		"Emotions",
		"Gut health",
		"Body",
		"Senses",
		"Brain",
	];
	return (
		<div className="flex max-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16 xl:mb-24">
			<div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
				<div className="w-full lg:w-1/2 flex justify-center items-center">
					<PieChart
						segmentNames={segmentNames}
						completedWheel={completedWheel}
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4">
					<h1 className="text-3xl font-bold text-gray-800 text-center lg:text-left">
						the norm
					</h1>
					<h2 className="text-xl text-gray-600 text-center lg:text-left">
						find and nourish yours now
					</h2>
					<Button variant="default">Start now..</Button>
				</div>
			</div>
		</div>
	);
}
