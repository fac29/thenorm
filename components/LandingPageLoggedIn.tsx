import { getSession } from "@auth0/nextjs-auth0";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import PieChart from "@/components/PieChart";
import TakeQuiz from "./TakeQuiz";

export default async function LandingPageLoggedIn() {
	const session = await getSession();
	const user = session?.user;

	const response = await fetch(`http://localhost:5158/api/User/${user?.sub}`);
	const existingUser = await response.json();
	const { name } = existingUser;

	let completedWheel = false;

	const segmentNamesWheelCompleted = [
		"Identify: not at all",
		"Lifespan: somewhat",
		"Community: not at all",
		"Passions: somewhat",
		"Structure: somewhat",
		"Pressure points: not at all",
		"Development: well",
		"Support: somewhat",
		"The Barrel: well",
		"Transition Management: well",
		"Strengths: well",
		"Balance: somewhat",
		"Energy flow: not at all",
		"Emotions: somewhat",
		"Gut health: well",
		"Body: somewhat",
		"Senses: well",
		"Brain: not at all",
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
								<CardTitle>{name}'s Summary:</CardTitle>
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
										You have identified some great strengths and being aware of
										what your senses need is one of them. You acknowledge that
										you are in a tricky situation with the demands of your job,
										but with some tweaks and extra support this will feel more
										manageable.
									</p>
									<p>You identified 3 areas of focus:</p>
									<p>
										1. Speak with your boss around time management. Request to
										block out protected admin time first thing to reduce
										overwhelm.
										<br />
										2. Priorisite swimming 3 times per week.
										<br />
										3. Build professional community network to reduce isolation.
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
					<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4">
						<TakeQuiz />
					</div>
				</div>
			)}
		</div>
	);
}
