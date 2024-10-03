import { Section } from '@/components/sections/section';
import Image from 'next/image';
import Link from 'next/link';
import BarUpdateNotification from '@/components/miscellaneous/bar-update-notification';

function WhatsappFloating() {
	return (
		<Section className={'fixed bottom-4 z-20 w-full bg-transparent'}>
			<div id={'whatsapp-floating'} className='w-full container mx-auto flex flex-col items-center justify-between gap-y-[3.125rem] px-[3.125rem]'>
				<div className='flex w-full items-center justify-end'>
					<div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-tr from-[#24FF54] to-[#04942C] shadow-lg'>
						<Link href='https://api.whatsapp.com/send?phone=6281931633594&text=Halo%21%20saya%20ada%20masalah%20dengan%20meducine%2C%20mohon%20dibantu' target='_blank' rel='noopener noreferrer'>
							<button type='button' className='group flex h-full w-full items-center justify-center rounded-full' aria-label='Whatsapp'>
								<Image src='/svgs/icons/whatsapp.svg' alt='whatsapp-icon' width={40} height={40} />
							</button>
						</Link>
					</div>
				</div>
				<BarUpdateNotification />
			</div>
		</Section>
	);
}

export default WhatsappFloating;
