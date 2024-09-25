import Link from 'next/link';
import { Section } from '@/components/sections/section';
import { HouseIcon } from '@/components/svgs/house-icon';
import Image from 'next/image';
import NotFoundThumbnail from '@/components/svgs/not-found-thumbnail';

export const metadata = {
	title: 'Halaman Tidak Ditemukan',
};

export default function RootNotFound() {
	return (
		<Section id={'not-found'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
			<Image src='/svgs/backgrounds/background-gradient-blue.svg' alt='background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				<div className='container relative mx-auto flex h-[56.375rem] w-full items-center justify-center px-[3.125rem] pt-[15.75rem] pb-[6.25rem]'>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex flex-col items-center justify-center gap-6'>
						<NotFoundThumbnail />
						<div className='flex flex-col items-center justify-center gap-y-7'>
							<div className='flex flex-col gap-y-5'>
								<p className='text-center text-[1.063rem] font-semibold leading-[1.375rem]'>Ups... Terjadi Kesalahan...</p>
								<h4 className='text-center text-[2.813rem] font-semibold leading-[3.625rem]'>
									Halaman <span className='text-secondary-400'>Tidak Ditemukan</span>
								</h4>
							</div>
							<Link href='/' className='focus:outline-none'>
								<button className='flex gap-x-3 rounded-sm bg-gradientBlue px-[2.188rem] py-4'>
									<HouseIcon className='fill-white' />
									<p className='text-white'>Kembali ke beranda</p>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
