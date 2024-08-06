import { getSession } from "@auth0/nextjs-auth0";

import Link from "next/link";
import Image from "next/image";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export async function NavBar() {
	const session = await getSession();
	const user = session?.user;

	return (
		<header className="flex h-32 items-center justify-between px-4 md:px-6">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<Image
					src="/The-Norm_Logo_Strapline_CHARCOAL_1.svg"
					width={200}
					height={200}
					alt="The Norm"
				/>
			</Link>
			<nav className="p-4 hidden sm:block">
				<div className="flex items-center">
					<Link
						href="/chat"
						className="bg-white text-black px-8 py-4 rounded-lg mr-8 hover:bg-[#e6e6e6] animate-bounce"
						prefetch={false}
					>
						Chat
					</Link>
					<div className="flex divide-x">
						<Link
							href="/about"
							className="bg-white text-black px-8 py-4 rounded-l-lg hover:bg-[#e6e6e6]"
							prefetch={false}
						>
							About
						</Link>
						{user ? (
							<a
								href="/api/auth/logout"
								className="bg-white text-black px-8 py-4 rounded-r-lg hover:bg-[#e6e6e6]"
							>
								Logout
							</a>
						) : (
							<a
								href="/api/auth/login"
								className="bg-white text-black px-8 py-4 rounded-r-lg hover:bg-[#e6e6e6]"
							>
								Login
							</a>
						)}
					</div>
				</div>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="sm:hidden">
						<MenuIcon />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right">
					<div className="grid w-[200px] p-4">
						<Link
							href="/"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href="/chat"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Chat
						</Link>
						<Link
							href="/about"
							className="text-lg font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							About
						</Link>
						{user ? (
							<a
								href="/api/auth/logout"
								className="text-lg font-medium hover:underline underline-offset-4"
							>
								Logout
							</a>
						) : (
							<a
								href="/api/auth/login"
								className="text-lg font-medium hover:underline underline-offset-4"
							>
								Login
							</a>
						)}
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
}

function MenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
