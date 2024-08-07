// components/LinkPreview.tsx

import React, { useEffect, useState } from "react";

interface LinkPreviewProps {
	url: string;
}

interface LinkMetadata {
	title: string;
	description: string;
	image: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
	const [metadata, setMetadata] = useState<LinkMetadata | null>(null);

	useEffect(() => {
		const fetchMetadata = async () => {
			try {
				const response = await fetch(
					`/api/metadata?url=${encodeURIComponent(url)}`
				);
				const data = await response.json();
				setMetadata(data);
			} catch (error) {
				console.error("Error fetching link metadata:", error);
			}
		};

		fetchMetadata();
	}, [url]);

	if (!metadata) {
		return <div>Loading...</div>;
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="link-preview"
		>
			<div className="link-preview-image">
				<img src={metadata.image} alt={metadata.title} />
			</div>
			<div className="link-preview-content">
				<h3 className="font-bold">{metadata.title}</h3>
				<p>{metadata.description}</p>
			</div>
		</a>
	);
};

export default LinkPreview;
