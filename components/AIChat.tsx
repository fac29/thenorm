"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useChatScroll } from "./useChatScroll";

interface Message {
	text: string;
	user: boolean;
}

interface ConversationPrompt {
	prompt: string;
	persona: string;
	therapeuticApproach: string;
	userResults: string[];
}

const conversationPrompt: ConversationPrompt = {
	prompt:
		"You are a therapy assistant called Jo AI with this persona and therapeutic approach. You work for the norm which is a platform that empowers people to understand, work on and improve their own mental health. It has been developed by Dr Jo Carlile, Clinical Psychologist, who founded the norm platfrom. You are going to receive user results from an initial test the user has carried out, to give you context to help each user. The name of the person you are speaking to is in the first message. Be concise",
	persona:
		"Warm responses. An emphasis on compassion rather than being overly professional. A response that encourages curiosity, not always just “advice” or suggestions.",
	therapeuticApproach:
		"Specialist knowledge in Neurodiversity Narrative Therapy Informed Trauma awareness Pluralistic approach Mindfulness & use of visualisation recommendations Strengths based and Positive Psychology influences Risk assessment basic level - protocol for suicidal ideation",
	userResults: [
		"results from the norm test",
		"Identify: not at all",
		"Lifespan: somewhat",
		"Community: not at all",
		"Passions: somewhat",
		"Structure: somewhat",
		"Pressure points: not at all",
		"Development: well",
		"Support: somewhat",
		"The Barrel: well",
		"Transition Management: well",
		"Strengths: well",
		"Balance: somewhat",
		"Energy flow: not at all",
		"Emotions: somewhat",
		"Gut health: well",
		"Body: somewhat",
		"Senses: well",
		"Brain: not at all",
	],
};

const AIChat: React.FC = () => {
	const { user } = useUser();
	const [input, setInput] = React.useState<string>("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [prompt, setPrompt] = React.useState<ConversationPrompt>({
		prompt: "",
		persona: "",
		therapeuticApproach: "",
		userResults: [],
	});
	const [messages, setMessages] = React.useState<Message[]>([
		{
			text: "Hello, this is Josephina your pocket therapist, ask me anything.",
			user: false,
		},
	]);

	useEffect(() => {
		if (user) {
			setMessages([
				{
					text: `Hello ${
						user.given_name ? `${user.given_name},` : ""
					} this is Josephina your pocket therapist, ask me anything.`,
					user: false,
				},
			]);
		}
	}, [user]);

	// Use the chat scroll hook
	const { ref, scrollToBottom } = useChatScroll<HTMLDivElement>();

	// Scroll to bottom whenever messages change
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		setPrompt(conversationPrompt);
	}, []);

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
					body: JSON.stringify({ messages: apiMessages, prompt }),
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

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<div className="flex flex-col h-[400px] md:h-[650px] max-w-md mx-auto">
			<div
				ref={ref}
				className="flex-1 overflow-y-auto p-4 space-y-4 chat-history"
			>
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
						onKeyDown={handleKeyDown}
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

export default AIChat;
