import { useRef, useEffect } from "react";

export function useChatScroll<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	const scrollToBottom = () => {
		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight;
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, []); // This will scroll to bottom on component mount

	return { ref, scrollToBottom };
}
