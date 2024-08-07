"use client";
import { Button } from "@/components/ui/button";

export default function TakQuiz() {
	return (
		<>
			<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center lg:text-lef">
				the norm
			</h1>
			<Button
				variant="default"
				className="px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl"
			>
				<a href="/questionnaire">Take Quiz</a>
			</Button>
		</>
	);
}
