import Link from "next/link";

export function Footer() {
	return (
		<footer className="text-black py-8 bg-card/30 w-full">
			<div className="max-w-screen-lg mx-auto px-4">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-start">
					<div className="mb-4 sm:mb-0">
						<h3 className="text-xl font-bold m-1">the norm</h3>
						<p className="text-sm m-1">Mental health empowerment for all.</p>
					</div>
					<div className="mb-4 sm:mb-0">
						<h4 className="text-lg font-semibold m-1">Quick Links</h4>
						<ul className="space-y-2 m-1">
							<li>
								<Link href="/" className="hover:text-gray-600 text-sm">
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" className="hover:text-gray-600 text-sm">
									About
								</Link>
							</li>
						</ul>
					</div>
					<div className="mb-4 sm:mb-0">
						<h4 className="text-lg font-semibold ">Contact Us</h4>
						<p className="text-sm">123 Main St, City, Country</p>
						<p className="text-sm">Email: hello@thenorm.life</p>
						<p className="text-sm">Phone: (123) 456-7890</p>
					</div>
					<div className="mb-4 sm:mb-0">
						<h4 className="text-lg font-semibold m-1">Follow Us</h4>
						<div className="flex space-x-4 m-1">
							<a href="#" className="hover:text-purple-600">
								<span className="sr-only">Facebook</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a href="#" className="hover:text-purple-600">
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="mt-3 border-t border-gray-700 pt-4 text-sm text-center">
					<p>
						&copy; {new Date().getFullYear()} the norm. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
