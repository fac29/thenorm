import React from "react";
import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
	icons: {
		icon: [
			{
				url: "/The-Norm_Logo_Strapline_CHARCOAL_1.svg",
				type: "image/svg+xml",
				sizes: "any",
			},
		],
		apple: [{ url: "/apple-icon-180x180.png", sizes: "180x180" }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<UserProvider>
				<body
					className={`${inter.className} bg-gradient-norm bg-cover bg-center`}
				>
					<header>
						<NavBar />
					</header>
					<main>{children}</main>
					<Footer />
				</body>
			</UserProvider>
		</html>
	);
}
