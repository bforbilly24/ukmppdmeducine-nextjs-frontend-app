'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from '@/components/svgs/chevron-right-icon';
import { ChevronUp } from '@/components/svgs/chevron-up-icon';
import { ChevronDown } from '@/components/svgs/chevron-down-icon';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function ProgramSection({ programLists }) {
	const [currentProgram, setCurrentProgram] = useState(programLists[0]);
	const [direction, setDirection] = useState(0);
	const router = useRouter();

	function handleProgramClick(program) {
		const currentIndex = programLists.findIndex((p) => p.id === currentProgram.id);
		const nextIndex = programLists.findIndex((p) => p.id === program.id);
		setDirection(nextIndex > currentIndex ? 1 : -1);
		setCurrentProgram(program);
	}

	function handleSelengkapnyaClick() {
		router.push(currentProgram.slug);
	}

	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
			transition: {
				x: { type: 'spring', stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 },
			},
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
			transition: {
				x: { type: 'spring', stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 },
			},
		}),
	};

	return (
		<div className='relative flex w-full items-center justify-between'>
			<div className='flex w-full items-center justify-between'>
				<motion.div
					className='z-10 flex h-full w-[27.5rem] flex-col items-center justify-center'
					initial={{ opacity: 0, y: 20 }} 
					animate={{ opacity: 1, y: 0 }} 
					transition={{ duration: 0.5 }} 
				>
					<AnimatePresence initial={false} custom={direction} mode='wait'>
						<motion.div
							key={currentProgram.id}
							custom={direction}
							variants={variants}
							initial='enter'
							animate='center'
							exit='exit'
						>
							<div className='flex h-fit w-full flex-col gap-y-5'>
								<div className='text-[0.813rem] font-medium uppercase tracking-[3.25px] text-primary-500'>Program Kelas</div>
								<p className='text-[2.188rem] font-semibold text-textColor-black-500 dark:text-gray-50'>{currentProgram.name}</p>
								<motion.div className='flex h-full flex-col items-start justify-center gap-2.5 border-l-8 border-primary-500 px-[1.563rem]'>
									<p className='text-[1.063rem] font-normal leading-7 text-textColor-gray-500 dark:text-gray-400'>{currentProgram.desc}</p>
									<div className='inline-flex items-center justify-start gap-[0.875rem]'>
										<p className='cursor-pointer text-[1.063rem] font-medium leading-relaxed text-textColor-black-500 dark:text-gray-50' onClick={handleSelengkapnyaClick}>
											Selengkapnya
										</p>
										<ChevronRight className={'fill-textColor-black-500 dark:fill-gray-50'} />
									</div>
								</motion.div>
							</div>
						</motion.div>
					</AnimatePresence>
				</motion.div>

				<div className='flex w-fit flex-col items-center justify-end'>
					<div className='relative h-fit w-fit overflow-hidden'>
						<Image src='/images/characters/program-character.png' alt='program-character' width={798} height={532} className='absolute bottom-0' />
						<Image src='/svgs/backgrounds/program-person-background.svg' alt='program-person-background' width={450} height={500} />
					</div>
				</div>

				<div className='z-10 flex h-fit w-[23.75rem] flex-col items-center justify-center gap-y-[2rem]'>
					<button className='flex flex-col items-center justify-start'>
						<ChevronUp className={'fill-primary-500'} />
					</button>

					<div className='flex w-full flex-col items-center justify-center gap-y-4'>
						{programLists.map((program) => (
							<motion.div
								key={program.id}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 },
								}} 
								className={`${
									currentProgram.id === program.id ? 'bg-gradient-to-tl from-primary-500 to-secondary-700 text-white' : 'bg-white text-textColor-black-500'
								} shadow-programButtonShadow dark:shadow-darkProgramButtonShadow group flex w-full cursor-pointer items-center justify-center rounded-[0.313rem] p-[1.563rem] hover:bg-gradient-to-tl hover:from-primary-200 hover:to-secondary-400`}
								onClick={() => handleProgramClick(program)}
							>
								<div className='flex h-[2.813rem] w-full items-center justify-start gap-x-5'>
									<div className={`${currentProgram.id === program.id ? 'fill-white' : 'fill-primary-500'} group-hover:fill-white`}>{program.icon}</div>
									<p className={`text-xl font-semibold leading-[1.625rem] ${currentProgram.id === program.id ? 'text-white' : 'text-textColor-black-500'} group-hover:text-white`}>{program.name}</p>
								</div>
							</motion.div>
						))}
					</div>

					<button className='flex flex-col items-center justify-start'>
						<ChevronDown className={'fill-primary-500'} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProgramSection;
