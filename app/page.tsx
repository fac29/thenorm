import { ModeToggle } from '@/components/modetoggle';
import { Button } from '@/components/ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

//import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>
				<ModeToggle />
			</div>
			<div>
				<Button variant='default'>Hello</Button>
			</div>
			<div>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
