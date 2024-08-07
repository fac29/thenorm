import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
	{
		id: "item-1",
		trigger: "What is the norm based on?",
		content:
			"It has been developed by Dr Jo Carlile, Clinical Psychologist. It is a pulling together of all the different factors therapists and practitioners use when thinking about how to support people with mental well-ness. Each factor is based upon psychological theory. It is designed to help people see their life through a therapy lens, but in a way that makes sense and helps them to choose a lifestyle that suits.",
	},
	{
		id: "item-2",
		trigger: "What’s this circle/wheel thing all about?",
		content:
			"The wheel is the centre of all things norm. It’s the visual framework showing you how many things affect your stress levels. It’s divided into 3 sections; Neurology, Orientation and Resilience. Each of the 18 factor sits within these areas and you will have your own individual way of needing these factors. Understanding your own wheel unlocks your power at choosing a less stressful lifestyle . Feel free to chat to our AI tool if you have more questions.",
	},
	{
		id: "item-3",
		trigger:
			"If one of my wheel spokes is red, does that mean there is something wrong with me?",
		content:
			"The colour coded design of the wheel is simply there as a guide. The colours change depending on whether you have reflected that this might be an area of your life that is impacting your stress levels. If a spoke is red, this does not mean anything is wrong with you. But it suggests that there might be some changes to your lifestyle that could be make which might reduce your stress levels.",
	},
	{
		id: "item-4",
		trigger:
			"Exploring these areas of my life has left me feeling anxious and worried. Who can I contact?",
		content:
			"It's understandable that these reflections might trigger thoughts and feelings that make you uncomfortable. We have set up a contact page that you can access here. Or for more urgent support and crisis management we recommend you call The Samaritans on 116 123",
	},
	{
		id: "item-5",
		trigger:
			"I don't really feel that interested in my mental well-ness, should I even bother?",
		content:
			"I think sometimes people think mental health is more 'therapeutic' than it actually is. Therapy is one end of staying well. The other end is simply being aware of how to live and what lifestyle to design in order to get the most from life. This platform is about you taking the time to work out which is the best way to live your own individual life.",
	},
];

export default function FAQ() {
	return (
		<div className="flex flex-col items-center px-4 py-8">
			<h2 className="text-center">Tell me more</h2>
			<Accordion type="single" collapsible className="w-full max-w-md">
				{accordionData.map((item) => (
					<AccordionItem key={item.id} value={item.id}>
						<AccordionTrigger>{item.trigger}</AccordionTrigger>
						<AccordionContent>{item.content}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
