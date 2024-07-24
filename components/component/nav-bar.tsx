import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
	return (
		<header className="flex h-32 items-center justify-between px-4 md:px-6">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<Image
					src="/The-Norm_Logo_Strapline_WHITE_1.svg"
					width={200}
					height={200}
					alt="The Norm Logo"
				/>
			</Link>
			<nav className="p-4">
				<div className="flex">
					<Link
						href="/about"
						className="bg-white text-black px-8 py-4 rounded-l-lg hover:bg-black-600 hover:bg-#e6e6e6"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="/account"
						className="bg-white text-black px-8 py-4 hover:bg-black-600 hover:bg-#e6e6e6"
						prefetch={false}
					>
						Account
					</Link>
					<Link
						href="/chat"
						className="bg-white text-black px-8 py-4 hover:bg-black-600 hover:bg-#e6e6e6"
						prefetch={false}
					>
						Chat
					</Link>
					<Link
						href="/signUpLogin"
						className="bg-white text-black px-8 py-4 rounded-r-lg hover:bg-black-600 hover:bg-#e6e6e6"
						prefetch={false}
					>
						Login
					</Link>
				</div>
			</nav>
		</header>
	);
}
