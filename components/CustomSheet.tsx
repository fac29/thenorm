import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

interface SheetProps {
	selectedSegment: string | null;
	isSheetOpen: boolean;
	setIsSheetOpen: (open: boolean) => void;
}

interface Resource {
	type: string;
	title: string;
	author?: string;
	url?: string;
}

interface Resources {
	[category: string]: Resource[];
}

const CustomSheet: React.FC<SheetProps> = ({
	selectedSegment,
	isSheetOpen,
	setIsSheetOpen,
}) => {
	const resources: Resources = {
		BRAIN: [
			{
				type: "Book",
				title: "ADHD: A hunter in a farmers world",
				author: "Thom Hartmann",
			},
		],
		SENSES: [
			{
				type: "Magazine article",
				title: "Sensory Processing Problems Profile ADHD",
				url: "https://www.additudemag.com/sensory-processing-problems-profile-adhd/",
			},
		],
		BODY: [
			{
				type: "Podcast",
				title: "Big Fish with Spencer Matthews",
				url: "https://podcasts.apple.com/gb/podcast/big-fish-with-spencer-matthews/id1652488990?i=1000649259876",
			},
		],
		"GUT HEALTH": [
			{
				type: "Podcast",
				title: "The Diary of a CEO with Steven Bartlett",
				url: "https://podcasts.apple.com/gb/podcast/the-diary-of-a-ceo-with-steven-bartlett/id1291423644?i=1000642185767",
			},
		],
		EMOTIONS: [
			{
				type: "YouTube Video",
				title: "Understanding Emotions",
				url: "https://www.youtube.com/watch?v=SJOjpprbfeE",
			},
		],
		"ENERGY FLOW": [
			{
				type: "PDF",
				title: "Are we able to judge our own chronotypes?",
				url: "https://www.sciencedirect.com/science/article/abs/pii/S0191886915004031",
			},
		],
		IDENTIFY: [
			{
				type: "LinkedIn Newsletter",
				title: "Kinship for women of colour",
				url: "https://www.linkedin.com/newsletters/6861989060827762688/?midToken=AQFcWSWPZ2tGzg&midSig=3x4VzjBeNPCqQ1&trk=eml-email_series_follow_newsletter_01-newsletter_entity_lockup-0-newsletter_entity_cta&trkEmail=eml-email_series_follow_newsletter_01-newsletter_entity_lockup-0-newsletter_entity_cta-null-hcpnom~lk1601xt~ql-null-null&eid=hcpnom-lk1601xt-ql",
			},
		],
		LIFESPAN: [
			{
				type: "YouTube Video",
				title: "Parenting tips",
				url: "https://www.youtube.com/watch?v=PHpPtdk9rco",
			},
		],
		COMMUNITY: [
			{
				type: "Website",
				title: "The Late Discovered Club",
				url: "https://www.podpage.com/the-late-discovered-club/",
			},
		],
		PASSIONS: [
			{
				type: "Quiz",
				title: "Find my passion quiz",
				url: "https://www.theforage.com/blog/basics/what-passion-quiz",
			},
		],
		STRUCTURE: [
			{
				type: "Podcast",
				title: "Regain control in an unpredictable world",
				url: "https://www.everand.com/podcast/512905588/Regain-control-in-an-unpredictable-world-Many-of-us-are-feeling-stuck-right-now-forced-to-adapt-to-a-world-that-we-have-little-control-over",
			},
		],
		"PRESSURE POINTS": [
			{
				type: "Podcast",
				title: "Jay Shetty on failing to fit in",
				url: "https://podcasts.apple.com/gb/podcast/s17-ep2-jay-shetty-on-failing-to-fit-in-learning-to/id1407451189?i=1000612416168",
			},
		],
		BALANCE: [
			{
				type: "Book",
				title: "The Surrender Experiment",
				author: "Michael Singer",
			},
		],
		STRENGTHS: [
			{
				type: "Podcast",
				title: "The ADHD Women's Wellbeing Podcast",
				url: "https://podcasts.apple.com/gb/podcast/the-adhd-womens-wellbeing-podcast/id1605386171?i=1000631023676",
			},
		],
		"TRANSITION MANAGEMENT": [{ type: "App", title: "Good Thinking App" }],
		"THE BARREL": [{ type: "App", title: "CALM App" }],
		SUPPORT: [
			{
				type: "App",
				title: "Voice of Health",
				url: "https://www.voiceofhealth.com.au",
			},
		],
		DEVELOPMENT: [
			{
				type: "Book",
				title: "The body keeps the score",
				author: "Van Der Kolk",
			},
		],
	};

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{selectedSegment}</SheetTitle>
					<SheetDescription>
						Resources to help with {selectedSegment?.toLowerCase()}.
					</SheetDescription>
				</SheetHeader>
				{selectedSegment !== null && (
					<div>
						{resources[selectedSegment.toUpperCase()].map(
							(resource: Resource, index) => {
								return (
									<div key={index}>
										<p>Title: {resource.title}</p>
										<p>Type: {resource.type}</p>
										{resource.author && <p>Author: {resource.author}</p>}
										{resource.url && <p>url: {resource.url}</p>}
									</div>
								);
							}
						)}
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default CustomSheet;
