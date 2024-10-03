import { Navbar } from '@/components/navigation/navbar';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
	return (
		<header id='header' className='absolute left-0 top-0 z-30 w-full bg-transparent'>
			<div className='container mx-auto flex h-fit w-full items-center justify-center px-[3.125rem] py-[0.938rem]'>
				<div className='flex w-full items-center justify-between'>
					<div className='flex items-center justify-center gap-x-[1.875rem]'>
						<div className='flex gap-x-[0.625rem]'>
							<Image src='/svgs/icons/phone.svg' alt='phone-icon' width={25} height={20} />
							<Link href='https://wa.me/6285608083342'>
								<p className='text-textColor-gray-500 hover:text-secondary-400 dark:text-gray-300 hover:dark:text-secondary-200'>( +62 ) 856 0808 3342</p>
							</Link>
						</div>
						<div className='flex items-center justify-center gap-x-[0.625rem]'>
							<Image src='/svgs/icons/time.svg' alt='time-icon' width={20} height={20} />
							<p className='text-textColor-gray-500 dark:text-gray-300'>08 AM - 10 PM</p>
						</div>
					</div>

					<div className='flex items-center justify-center gap-x-[0.625rem]'>
						<Image src='/svgs/icons/location.svg' alt='location-icon' width={15} height={21} />
						<Link href='https://maps.app.goo.gl/x6SNN1o82uUfXecGA'>
							<p className='text-textColor-gray-500 hover:text-secondary-400 dark:text-gray-300 hover:dark:text-secondary-200'> Jl. Dharmahusada Indah Barat Block AB 224 Surabaya</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export { Header };
