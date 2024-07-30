import Link from "next/link";
import Image from "next/image";

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2" prefetch={false}>
			<Image
				className="hover:bg-[#e6e6e6]"
				src="/The-Norm_Logo_Strapline_CHARCOAL_1.svg"
				width={200}
				height={200}
				alt="The Norm Logo"
			/>
		</Link>
	);
}
