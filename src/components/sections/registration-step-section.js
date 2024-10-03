'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { registrationSteps } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';

const RegistrationStepSection = () => {
    const [hoveredStep, setHoveredStep] = useState(1);

    const lineVariants = {
        hidden: { width: 0 },
        visible: (hoveredIndex) => ({
            width: `${(hoveredIndex / registrationSteps.length) * 100}%`,
            transition: { duration: 0.6, ease: 'easeInOut' },
        }),
    };

    const isGrayscaleDisabled = (stepId) => hoveredStep >= parseInt(stepId);

    const renderStepContent = (step) => (
        <div className="flex flex-col items-center justify-center gap-y-[2.188rem]">
            <div
                className={`flex h-20 w-20 items-center justify-center rounded-[0.313rem] 
                ${isGrayscaleDisabled(step.id) 
                    ? 'bg-gradient-to-t from-primary-200 to-primary-500' 
                    : 'bg-white shadow-stepButtonShadow grayscale'
                }`}
            >
                <p className={`text-lg font-bold ${isGrayscaleDisabled(step.id) ? 'text-white' : 'text-primary-500'}`}>
                    {step.id}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-[0.625rem]">
                <Image
                    src={step.img}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    className={`${isGrayscaleDisabled(step.id) ? '' : 'grayscale'} transition duration-300`}
                />
            </div>
            <div className="flex flex-col gap-y-[0.625rem] px-2">
                <p className="text-center text-base font-bold text-textColor-black-500 dark:text-gray-200">{step.name}</p>
                <p className="text-center text-[1.063rem] leading-7 text-textColor-gray-500 dark:text-gray-200">
                    {step.id === '01' ? (
                        <>
                            Klik tombol Whatsapp, atau bisa klik{' '}
                            <Link href="https://api.whatsapp.com/send?phone=6281931633594&text=Halo%21%20saya%20ada%20masalah%20dengan%20meducine%2C%20mohon%20dibantu" passHref>
                                <span className='text-primary-500 cursor-pointer'>disini</span>
                            </Link>.
                        </>
                    ) : step.desc}
                </p>
            </div>
        </div>
    );

    return (
        <div className="relative grid w-full grid-cols-3">
            {registrationSteps.map((step) => (
                <div
                    key={step.id}
                    className="z-10 flex flex-col items-center justify-between px-[0.938rem] group"
                    onMouseEnter={() => setHoveredStep(parseInt(step.id))}
                    onMouseLeave={() => setHoveredStep(1)}
                >
                    {renderStepContent(step)}
                </div>
            ))}

            <div className="absolute left-0 top-10 flex w-full items-center">
                <div className="relative h-[1.563rem] w-[1.563rem] bg-primary-300 rounded-full z-20"></div>

                <motion.div
                    className="h-[2px] bg-gradient-to-r from-primary-50 to-primary-700"
                    initial="hidden"
                    animate={hoveredStep ? 'visible' : 'hidden'}
                    variants={lineVariants}
                    custom={hoveredStep}
                />

                <div className="relative h-[1.563rem] w-[1.563rem] bg-primary-300 rounded-full z-20 ml-auto"></div>
            </div>
        </div>
    );
};

export default RegistrationStepSection;
