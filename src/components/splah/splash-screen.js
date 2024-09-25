'use client';

import { useState, useEffect } from 'react';
import Brandname from '@/components/svgs/brandname';
import Image from 'next/image';

function SplashScreen() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			document.body.style.overflow = 'auto';
			setLoading(false);
		}, 3500);
	}, []);

	if (loading) {
		return (
			<div className='fixed z-50 flex h-screen w-screen items-center justify-center'>
				<div className='flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-gray-950'>
					<Image src='/svgs/backgrounds/background-gradient-blue.svg' alt='background-gradient-blue' fill className='absolute inset-0 z-0 object-cover' />
					<Brandname />
				</div>
			</div>
		);
	}

	return null;
}

export { SplashScreen };
