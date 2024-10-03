'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import ToggleTheme from '@/hooks/toggle-theme';
import { useEffect, useState } from 'react';
import { changeRoute } from '@/libs/change-route';
import { staticNavMenuItems } from '@/utils/constants';

function Navbar() {
	const router = useRouter();
	const pathname = usePathname();
	const [isSticky, setIsSticky] = useState(false);

	const homeItem = staticNavMenuItems.find((item) => item.id === '1');
	const navMenuItems = staticNavMenuItems.filter((item) => item.id !== '1');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			id='navbar'
			className={`${isSticky ? 'sticky top-0' : 'absolute top-[3.438rem]'} z-30 w-full bg-transparent transition-all duration-500 ease-in-out`}
		>
			<div className='container mx-auto flex h-fit w-full items-center justify-center px-[3.125rem]'>
				<div className={`flex h-[7rem] w-full items-center justify-center rounded border border-white/80 bg-white/80 px-[2.188rem] shadow-navbarShadow backdrop-blur-[1.25rem] transition-all duration-500 ease-in-out dark:border-gray-900/80 dark:bg-gray-900/80`}>
					<div className='flex h-fit w-full items-center justify-between'>
						{homeItem && <Image src='/svgs/brand.svg' alt='brand-ukmppd' width={148} height={26} className='cursor-pointer' onClick={() => changeRoute(router, homeItem.slug)} />}
						<div className='flex gap-x-6'>
							{navMenuItems.map((item) => {
								const isActive = pathname === item.slug;
								return (
									<div
										key={item.id}
										className={`relative flex cursor-pointer items-center justify-center text-center hover:text-secondary-300 dark:hover:text-secondary-200 ${isActive ? 'text-primary-500' : 'text-textColor-gray-500 dark:text-gray-300'} group`}
										onClick={() => changeRoute(router, item.slug)}
									>
										{item.name}
										<span className={`absolute bottom-[-2px] left-0 h-[2px] w-full scale-x-0 transform transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${isActive ? 'scale-x-100 bg-primary-500' : 'bg-primary-300 dark:bg-primary-200'}`}></span>
									</div>
								);
							})}
							<ToggleTheme />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
