import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import { NavBar } from "@/components/component/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "theNorm",
	description: "Your own personal Jo in your pocket",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-gradient-norm bg-cover bg-center`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header>
						<NavBar />
					</header>
					<main>{children}</main>
					<footer>
						<p>footer will go here</p>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
