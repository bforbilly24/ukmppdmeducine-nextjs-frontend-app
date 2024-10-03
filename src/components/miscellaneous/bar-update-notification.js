'use client';

import { useState } from 'react';
import { Section } from '@/components/sections/section';
import { ArrowUpRightFromSquareIcon } from '@/components/svgs/arrow-up-right-from-square-icon';
import { WrenchIcon } from '@/components/svgs/wrench-icon';

function BarUpdateNotification() {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<Section id={'bar-update-notification'} className={'w-full'}>
				<div className='flex w-full items-center justify-between rounded-sm bg-primary-500/60 px-4 py-3 backdrop-blur-md shadow-navbarShadow'>
					<div className='flex w-fit gap-x-4'>
						<div className='flex h-8 w-8 items-center justify-center rounded-sm bg-white/10'>
                        <WrenchIcon className={'fill-white group-hover:text-white/80'} />
						</div>

						<div className='flex items-center justify-center'>
							<p className='text-[0.875rem] leading-5 text-white'>Landing Page Baru Meducine!</p>
						</div>
					</div>

					<div className='flex w-fit items-center justify-center gap-x-6'>
						<button className='flex items-center justify-center' onClick={handleClose}>
							<p className='text-[0.875rem] leading-5 text-white/60 hover:text-white/90'>Tutup</p>
						</button>

						<button className='group flex h-9 w-fit items-center justify-center gap-x-2 rounded-[0.375rem] bg-white/10 px-[0.875rem] hover:bg-white/40'>
							<p className='text-[0.875rem] leading-5 text-white group-hover:text-white/80'>Pelajari</p>
							<ArrowUpRightFromSquareIcon className={'fill-white group-hover:text-white/80'} />
						</button>
					</div>
				</div>
		</Section>
	);
}

export default BarUpdateNotification;
