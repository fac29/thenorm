import { getSession } from "@auth0/nextjs-auth0";

import LandingPageNotLoggedIn from "../components/LandingPageNotLoggedIn";
import LandingPageLoggedIn from "../components/LandingPageLoggedIn";
import FAQ from "@/components/FAQ";

export default async function Home() {
	const session = await getSession();
	const user = session?.user;

	if (user) {
		const { sub, email, name, picture } = user;
		try {
			const userResponse = await fetch(
				`http://localhost:5158/api/User/${user.sub}`
			);

			if (userResponse.ok) {
				const existingUser = await userResponse.json();
				console.log("User exists:", existingUser);
			} else if (userResponse.status === 404) {
				// User does not exist, create a new one
				const createUserResponse = await fetch(
					`http://localhost:5158/api/User/`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							id: sub,
							email: email,
							name: name,
							pictureUrl: picture,
							summaryParagraph: `Well done for taking some time to get to know yourself a little better. Hopefully you have a bit more of a grasp on what your own unique mental health needs are, and what tweaks you can make to reduce your stress.

Your colour wheel identifies which areas you might want to focus on, with red being areas of priority. The conversation highlighted that you feel well matched in some areas but perhaps others need some focus.

You are an empathic person who enjoys connecting with others. You have passion for sports and driving cars. You are aware of the impact your stress has on your physical and mental health and have a desire to change some things.

You identified 3 areas of focus:

1. Create some more structure throughout the week to increase predictability.
2. Identify strategies to support you during times of change and transition.
3. Prioritise some time each week for personal development.`,
						}),
					}
				);

				if (!createUserResponse.ok) {
					throw new Error("Failed to create user");
				}

				const newUser = await createUserResponse.json();
				console.log("User created:", newUser);
			} else {
				throw new Error("Failed to fetch user");
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Error:", error.message);
			} else {
				console.error("An unknown error occurred.");
			}
		}
	}

	return (
		<div className="max-w-screen-lg mx-auto px-4">
			{user === undefined && <LandingPageNotLoggedIn />}
			{user && <LandingPageLoggedIn />}
			<FAQ />
		</div>
	);
}
