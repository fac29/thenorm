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
				<span className="sr-only">Acme Inc</span>
			</Link>
			<nav className="hidden md:flex md:gap-6">
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					About
				</Link>
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Account
				</Link>
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Chat
				</Link>
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Login
				</Link>
			</nav>
		</header>
	);
}
