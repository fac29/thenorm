import React, { useEffect } from "react";
import { Button } from "./ui/button";

interface Message {
	text: string;
	user: boolean;
}

const ChatComponent: React.FC = () => {
	const [messages, setMessages] = React.useState<Message[]>([]);
	const [input, setInput] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSend = async (): Promise<void> => {
		if (input.trim()) {
			const userMessage = { text: input, user: true };
			setMessages((previousMessages) => [...previousMessages, userMessage]);
			setInput("");
			setIsLoading(true);

			try {
				const apiMessages = messages.concat(userMessage).map((msg) => ({
					role: msg.user ? "user" : "assistant",
					content: msg.text,
				}));

				const response = await fetch("/api/openai", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ messages: apiMessages }),
				});

				if (!response.ok) {
					throw new Error("Failed to fetch response");
				}
				const data = await response.json();

				setMessages((previousMessages) => [
					...previousMessages,
					{ text: data.response, user: false },
				]);
			} catch (error) {
				console.error("Error fetching AI response", error);
				setMessages((previousMessages) => [
					...previousMessages,
					{
						text: "Sorry I encountered an error. Please try again",
						user: false,
					},
				]);
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<div className="flex flex-col h-[550px] max-w-md mx-auto">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`flex ${message.user ? "justify-end" : "justify-start"}`}
					>
						<div
							className={`rounded-lg p-2 max-w-xs ${
								message.user ? "bg-purple-500 text-white" : "bg-gray-200"
							}`}
						>
							{message.text}
						</div>
					</div>
				))}
			</div>
			{isLoading && <div>AI is thinking...</div>}
			<div className="p-4 border-t">
				<div className="flex space-x-2">
					<input
						type="text"
						value={input}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setInput(e.target.value)
						}
						className="flex-1 border rounded-lg px-3 py-2"
						placeholder="Type your message..."
					/>
					<Button
						variant="default"
						onClick={handleSend}
						className="bg-purple-500 text-white px-4 py-2 rounded-lg"
					>
						Send
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChatComponent;
