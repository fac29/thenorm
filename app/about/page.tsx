import React from "react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
};

export default function About() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-gray-800">
				Welcome to the norm
			</h1>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Helping you to help yourself</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-6 text-gray-700">
						<p>
							We are disrupting the culture of mental health. We are challenging
							the idea of pursuing normality and instead reminding ourselves
							that we all are unique in how we need to live and that is the real
							norm. Without realising it we are often trying to live someone
							else's story. It is time to let it go and start writing your own,
							based on who you are and what is important to you.
						</p>
						<p>
							This platform is designed to get you ahead of the game. To deepen
							your understanding of your own norms and how to nourish them. It’s
							outdated to seek mental health support once things fall apart. The
							norm allows you to be proactive in 3 simple steps.
						</p>
						<ol className="list-decimal pl-6 space-y-2">
							<li>
								Learn who you are and what factors impact your stress levels,
								including how to tweak your lifestyle to suit your needs.
							</li>
							<li>
								To access resources and information with ease and understanding.
							</li>
							<li>
								To have 24/7 therapeutic guidance to answer all queries about
								mental health with personalised responsive support.
							</li>
						</ol>
						<p>
							We want to make mental wellness empowering. Having your very own
							pocket encyclopedia of knowledge. Helping you navigate life in a
							way that is easy, private and useful.
						</p>
						<p>
							The norm is about keeping things real and balanced. It’s not a
							place to over-analyse everything, but it is about prioritising
							well-mess. It will help you live in a way that makes you feel less
							stressed and it will do it in a way that makes you understand why.
						</p>
						<div>
							<p className="font-semibold mb-2">
								The norm is for you if any of the following apply:
							</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>you are curious about what affects your mental health</li>
								<li>
									you want to be progressive and proactive in designing a life
									based on your mental health needs
								</li>
								<li>
									you have been in therapy and now want to put some skills into
									practice
								</li>
								<li>
									you find it frustrating that you can’t make sense of good
									mental health resources on the internet.
								</li>
								<li>
									you think it would be helpful to have a mini therapist in your
									pocket who can answer mental health related questions.
								</li>
							</ul>
						</div>
						<p>
							The norm is brought to you by Dr Jo Carlile. Clinical Psychologist
							& Neurodiversity Specialist. It’s approach is embedded in evidence
							based psychological theory and practice. It is designed as a
							practice based service to empower individuals to design their life
							through a therapeutic lense. 1:1 therapy is costly and limited.
							The norm is about giving you the knowledge and the power to
							understand and control your own mental health needs.
						</p>
						<p>
							Life will always continue to throw you lemons. We want to give you
							the tools so making your own lemonade becomes the norm.
						</p>
					</div>
				</CardContent>
			</Card>
			{/* <Card className="mb-8">
				<CardHeader>
					<CardTitle>State of Mental Health</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-black mb-4">
						At Our Company, we strive to innovate and create solutions that make
						a positive impact on people's lives. Our team of dedicated
						professionals works tirelessly to deliver high-quality products and
						services that exceed our customers' expectations.
					</p>
					<p className="text-black mb-4">
						Founded in 2010, we have grown from a small startup to a leader in
						our industry, serving clients worldwide. Our commitment to
						excellence and customer satisfaction drives everything we do.
					</p>
					<Button>Learn More</Button>
				</CardContent>
			</Card> */}

			<h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{["Jo", "Spot the Cat"].map((name) => (
					<Card key={name}>
						<CardContent className="pt-6">
							<Avatar className="w-24 h-24 mx-auto mb-4">
								<AvatarImage
									src={`/avatars/${name.toLowerCase().replace(" ", "-")}.jpg`}
								/>
								<AvatarFallback>
									{name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<h3 className="text-xl font-semibold text-center">{name}</h3>
							<p className="text-gray-600 text-center">Co-founder</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
