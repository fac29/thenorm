"use client";

import { useState } from "react";

import LandingPageTypeformNotComplete from "../components/LandingPageTypeformNotComplete";
import LandingPageLoggedInTypeFormComplete from "../components/LandingPageLoggedInTypeFormComplete";

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
		</div>
	);
}
