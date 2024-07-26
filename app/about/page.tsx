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
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Our Mission</CardTitle>
				</CardHeader>
				<CardContent>
					<h2 className="font-bold mb-6">Helping you to help yourself</h2>
					<p className="text-gray-700 mb-4">
						At Our Company, we strive to innovate and create solutions that make
						a positive impact on people's lives. Our team of dedicated
						professionals works tirelessly to deliver high-quality products and
						services that exceed our customers' expectations.
					</p>
					<p className="text-gray-700 mb-4">
						Founded in 2010, we have grown from a small startup to a leader in
						our industry, serving clients worldwide. Our commitment to
						excellence and customer satisfaction drives everything we do.
					</p>
					<Button>Learn More</Button>
				</CardContent>
			</Card>
			<Card className="mb-8">
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
			</Card>

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
