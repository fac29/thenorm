import React from "react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
};

export default function About() {
	return (
		<div className="max-w-screen-lg mx-auto px-4">
			<h1 className="font-semibold text-lg mb-2">Nice to meet you</h1>
			<div className="flex flex-col space-y-6 px-6 sm:px-0">
				<div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-6">
					<div className="flex-shrink-0 md:self-start">
						<Image
							src="/jo_profile_square.jpeg"
							width={350}
							height={350}
							alt="The founder"
							className="rounded-3xl object-cover shadow-lg"
						/>
					</div>

					<blockquote className="border-l-4 border-indigo-500 pl-4 italic text-lg text-gray-600 text-center md:self-center">
						"My name is Jo and I am a Clinical Psychologist. Which essentially
						means I am someone who helps people navigate the curve balls of
						life. I worked in the NHS for many years and left to build my own
						practice to work in a way that suited my needs and that of my
						family."
					</blockquote>
				</div>
				<div>
					<div className="flex flex-row space-y-6 px-6 sm:px-0 py-12">
						<div className="text-left text-gray-700">
							<h3 className="font-semibold text-lg mb-2">What’s the vision?</h3>
							<p className="mb-4">
								the norm is my attempt at disrupting the culture of mental
								health. It’s time to break the cycle of becoming unwell before
								we figure out how to stay well. Over the years as a Psychologist
								I have seen the efforts made in the pursuit of normality.
								Without realizing it, people are often trying to live someone
								else’s story.
							</p>
							<p className="mb-4">
								I want people to realize that they can write their own. That the
								real success to feeling ‘normal’ is to live a life that is based
								on who you are as an individual and what’s important to you.
							</p>
							<p className="mb-4">
								Over the past two years I have had a vision. A wish to create a
								platform that enables people to:
							</p>
							<ol className="list-decimal pl-6 space-y-2 mb-4">
								<li>
									Make sense of who they are so they can design a lifestyle that
									suits them
								</li>
								<li>
									Access and make sense of good quality resources and support
								</li>
								<li>
									Have 24/7 therapeutic guidance to answer all things mental
									health.
								</li>
							</ol>
							<p className="mb-4">
								We all have the complete ability to be in control of our mental
								well-ness. As long as we are given the information and tools to
								do so. Life will continue to throw us curve balls…..but if we
								have a good solid bat we can whack them right back.
							</p>
						</div>
						<div className="flex-shrink-0 md:self-start">
							<Image
								src="/design-word.PNG"
								width={250}
								height={250}
								alt="the word design"
								className="rounded-3xl object-cover shadow-lg"
							/>
						</div>
					</div>

					<div className="flex flex-row space-y-6 px-6 sm:px-0 py-12">
						<div className="flex-shrink-0 md:self-start">
							<Image
								src="/brain-heart.jpeg"
								width={200}
								height={200}
								alt="A heart inside inside a head"
								className="rounded-3xl object-cover shadow-lg"
							/>
						</div>
						<div className="text-left text-gray-700">
							<h3 className="font-semibold text-lg mb-2">
								Do I need this in my life?
							</h3>

							<p className="mb-4">the norm is for you if any of these apply:</p>
							<ul className="list-disc pl-6 space-y-1 mb-4">
								<li>
									You are curious about what affects your mental well-ness
								</li>
								<li>
									You want to be progressive in designing an individual
									lifestyle that suits
								</li>
								<li>
									You find it frustrating that you can’t get make sense of where
									to find good support and resources relating to mental health
								</li>
								<li>
									It feels useful to have a therapeutic guide in your pocket for
									whenever you might want information, advice, or support.
								</li>
								<li>
									You have been in therapy and now want to keep a proactive
									space to maintain well-ness
								</li>
							</ul>
						</div>
					</div>
					<div className="text-left text-gray-700 py-12">
						<h3 className="font-semibold text-[15px] mb-2">The small print</h3>
						<p className="text-[13px] mb-4">
							the norm is built on the principles of psychological theory and
							empirical evidence. It conceptualizes our mental health needs
							within a framework of three areas. The first area is Neurology and
							refers to the way we are wired. This remains fairly static
							throughout our lives. The second area is Orientation which
							connects with the current life-stage we are at. This changes as we
							hit significant life milestones and transitions. The third and
							final area is Resilience which taps into the power we have in our
							strengths.
						</p>
						<p className="text-[13px] mb-4">
							Whilst the norm itself has not been empirically tested as a method
							of maintaining well-ness, the individual theories it is built on
							have been. It draws on principles of Neuroscience, Attachment
							Theory, Trauma concepts, Positive Psychology, Cognitive Behaviour
							Therapy, Narrative Therapy, and others. The platform aims to be a
							piece of practice-based evidence that is less about research done
							on others and more about your individual needs and ability to take
							control of your own mental well-ness.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
