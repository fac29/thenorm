"use client";

import { useState } from "react";

import LandingPageNotLoggedIn from "../components/LandingPageNotLoggedIn";
import LandingPageLoggedIn from "../components/LandingPageLoggedIn";
import FAQ from "@/components/FAQ";

export default function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
	const [completedWheel, setCompletedWheel] = useState<boolean>(false);
	return (
		<div>
			{isLoggedIn === false && completedWheel === false && (
				<LandingPageTypeformNotComplete completedWheel={completedWheel} />
			)}
			{isLoggedIn === true && completedWheel === false && (
				<LandingPageTypeformNotComplete completedWheel={completedWheel} />
			)}
			{isLoggedIn === true && completedWheel === true && (
				<LandingPageLoggedInTypeFormComplete completedWheel={completedWheel} />
			)}
			<FAQ />
		</div>
	);
}
