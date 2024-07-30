import React, { useState } from "react";

interface Message {
	text: string;
	user: boolean;
}

const ChatBot: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState<string>("");

	const handleSend = (): void => {
		if (input.trim()) {
			// Add user message
			setMessages([...messages, { text: input, user: true }]);

			// Simulate AI response (replace this with actual AI processing)
			setTimeout(() => {
				setMessages((prevMessages) => [
					...prevMessages,
					{ text: `AI response to: ${input}`, user: false },
				]);
			}, 1000);

			setInput("");
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
					<button
						onClick={handleSend}
						className="bg-purple-500 text-white px-4 py-2 rounded-lg"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
