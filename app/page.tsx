import { getSession } from "@auth0/nextjs-auth0";

import LandingPageNotLoggedIn from "../components/LandingPageNotLoggedIn";
import LandingPageLoggedIn from "../components/LandingPageLoggedIn";
import FAQ from "@/components/FAQ";

export default async function Home() {
	const session = await getSession();
	const user = session?.user;

	return (
		<div>
			{user === undefined && <LandingPageNotLoggedIn />}
			{user && <LandingPageLoggedIn />}
			<FAQ />
		</div>
	);
}
