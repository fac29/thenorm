import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themeprovider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'theNorm',
	description: 'Your own personal Jo in your pocket',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<header>
						<p>nav will go here</p>
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
