import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
	return (
		<header className="flex h-16 items-center justify-between px-4 md:px-6">
			<Link href="#" className="flex items-center gap-2" prefetch={false}>
				<Image
					src="/The-Norm_Logo_Strapline_ORANGE_1.svg"
					width={100}
					height={100}
					alt="The Norm Logo"
				/>
			</Link>
			<nav className="bg-white p-4">
				<div className="flex">
					<Link
						href="#"
						className="bg-orange-200 text-white px-4 py-2 rounded-l-lg hover:bg-black-600 hover:bg-orange-300"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="#"
						className="bg-orange-200 text-white px-4 py-2 hover:bg-black-600 hover:bg-orange-300"
						prefetch={false}
					>
						Account
					</Link>
					<Link
						href="#"
						className="bg-orange-200 text-white px-4 py-2 hover:bg-black-600 hover:bg-orange-300"
						prefetch={false}
					>
						Chat
					</Link>
					<Link
						href="#"
						className="bg-orange-200 text-white px-4 py-2 rounded-r-lg hover:bg-black-600 hover:bg-orange-300"
						prefetch={false}
					>
						Login
					</Link>
				</div>
			</nav>
		</header>
	);
}
