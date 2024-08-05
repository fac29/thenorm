import { getSession } from "@auth0/nextjs-auth0";

import Link from "next/link";
import Image from "next/image";

export async function NavBar() {
	const session = await getSession();
	const user = session?.user;

	return (
		<header className="flex h-32 items-center justify-between px-4 md:px-6">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<Image
					// className="hover:bg-[#e6e6e6]"
					src="/The-Norm_Logo_Strapline_CHARCOAL_1.svg"
					width={200}
					height={200}
					alt="The Norm Logo"
				/>
			</Link>
			<nav className="p-4">
				<div className="flex items-center">
					<Link
						href="/chat"
						className="bg-white text-black px-8 py-4 rounded-lg mr-8 hover:bg-[#e6e6e6] animate-bounce"
						prefetch={false}
					>
						{/* Pulsing animation commenting out but it is an option:
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span> */}
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
								className="bg-white text-black px-8 py-4 rounded-r-lg hover:bg-[#e6e6e6]"
								href="/api/auth/logout"
							>
								Logout
							</a>
						) : (
							<a
								className="bg-white text-black px-8 py-4 rounded-r-lg hover:bg-[#e6e6e6]"
								href="/api/auth/login"
							>
								Login
							</a>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}
