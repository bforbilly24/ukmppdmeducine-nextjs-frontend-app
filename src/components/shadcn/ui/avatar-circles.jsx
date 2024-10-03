'use client';
import React from 'react';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const AvatarCircles = ({ numPeople, className, avatarUrls }) => {
	return (
		<div className={cn('z-10 flex -space-x-10 rtl:space-x-reverse', className)}>
			{avatarUrls.map((url, index) => (
				<div
					key={index}
					className='h-20 w-20 rounded-full border-[0.313rem] overflow-hidden border-white dark:border-gray-800'
				>
					<Image
						src={url}
						width={80}
						height={80}
						alt={`Avatar ${index + 1}`}
						className="object-cover rounded-full"
					/>
				</div>
			))}

			{/* Conditionally render numPeople */}
			{numPeople !== false && (
				<div className='relative flex items-center justify-center h-20 w-20 rounded-full border-[0.375rem] border-white bg-black text-center text-sm font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black'>
					+{numPeople}
				</div>
			)}
		</div>
	);
};

export default AvatarCircles;
