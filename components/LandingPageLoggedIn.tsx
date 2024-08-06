"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import PieChart from "@/components/PieChart";

export default function LandingPageLoggedIn() {
	const [completedWheel, setCompletedWheel] = useState<boolean>(true);
	const segmentNamesWheelCompleted = [
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

	const segmentNamesWheelNotCompleted = [
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
		<div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16 xl:mb-24">
			{completedWheel ? (
				<div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
					<div className="w-full lg:w-1/2 flex justify-center items-center">
						<PieChart
							segmentNames={segmentNamesWheelCompleted}
							completedWheel={completedWheel}
						/>
					</div>
					<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4">
						<Card className="mb-8">
							<CardHeader>
								<CardTitle>Summary:</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-6 text-black-700">
									<p>
										Well done for taking some time to get to know yourself a
										little better. Hopefully you have a bit more of a grasp on
										what your own unique mental health needs are, and what
										tweaks you can make to reduce your stress.
									</p>
									<p>
										Your colour wheel identifies which areas you might want to
										focus on, with red being areas of priority. The conversation
										highlighted that you feel well matched in some areas but
										perhaps others need some focus.
									</p>
									<p>
										You are an empathic person who enjoys connecting with
										others. You have passion for sports and driving cars. You
										are aware of the impact your stress has on your physical and
										mental health and have a desire to change some things.
									</p>
									<p>You identified 3 areas of focus:</p>
									<p>
										1. Create some more structure throughout the week to
										increase predictability.
										<br />
										2. Identify strategies to support you during times of change
										and transition.
										<br />
										3. Prioritise some time each week for personal development.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			) : (
				<div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
					<div className="w-full lg:w-1/2 flex justify-center items-center">
						<PieChart
							segmentNames={segmentNamesWheelNotCompleted}
							completedWheel={completedWheel}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
