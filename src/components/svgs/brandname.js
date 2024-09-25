'use client';

import { motion } from 'framer-motion';

function Brandname() {
	// Define animation variants for the SVG and paths
	const svgVariants = {
		hidden: { opacity: 0, x: -150 }, // Start from left (-150 pixels offset)
		visible: {
			opacity: 1,
			x: 0, // Move to the original position
			transition: {
				duration: 0.8,
				ease: 'easeOut',
				when: 'beforeChildren',
				staggerChildren: 0.1, // Adjust the staggerChildren to ensure proper sequential entry
			},
		},
	};

	const pathVariants = {
		hidden: {
			opacity: 0,
			x: -20, // Each path starts slightly off to the left
		},
		visible: {
			opacity: 1,
			x: 0, // Move to the original position
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 10,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.svg
			width='685'
			height='118'
			viewBox='0 0 685 118'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			variants={svgVariants}
			initial='hidden'
			animate='visible'
		>
			{/* Paths ordered from "U" to "D" */}
			<motion.path
				d="M67.7666 0H91.1921V106.753L71.7824 117.964H19.4097L0 106.753V0H23.4255V96.2119H67.7666V0Z"
				fill="url(#paint5_linear_184_426)"
				variants={pathVariants}
			/>
			<motion.path
				d="M119.611 117.128V0H143.037V52.7074H143.371L187.043 0H214.819L168.638 54.8826L220.006 117.128H191.896L154.582 71.6151L143.037 85.1685V117.128H119.611Z"
				fill="url(#paint4_linear_184_426)"
				variants={pathVariants}
			/>
			<motion.path
				d="M333.692 117.128V39.8234H333.357L306.92 117.128H284.666L258.061 38.8194H257.727V117.128H235.138V0H266.26L295.709 86.1724H296.044L325.326 0H356.281V117.128H333.692Z"
				fill="url(#paint3_linear_184_426)"
				variants={pathVariants}
			/>
			<motion.path
				d="M384.651 117.128V0H446.394L465.804 11.2108V63.4162L446.394 74.627H408.077V117.128H384.651ZM408.077 20.079V54.548H442.379V20.079H408.077Z"
				fill="url(#paint2_linear_184_426)"
				variants={pathVariants}
			/>
			<motion.path
				d="M489.229 117.128V0H550.972L570.382 11.2108V63.4162L550.972 74.627H512.655V117.128H489.229ZM512.655 20.079V54.548H546.957V20.079H512.655Z"
				fill="url(#paint1_linear_184_426)"
				variants={pathVariants}
			/>
			<motion.path
				d="M685 105.917L665.59 117.128H593.808V0H665.59L685 11.2108V105.917ZM617.233 20.079V97.0485H661.574V20.079H617.233Z"
				fill="url(#paint0_linear_184_426)"
				variants={pathVariants}
			/>
			<defs>
				<linearGradient id="paint0_linear_184_426" x1="595.064" y1="72.3577" x2="683.165" y2="74.9642" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
				<linearGradient id="paint1_linear_184_426" x1="490.347" y1="72.3577" x2="568.764" y2="74.4222" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
				<linearGradient id="paint2_linear_184_426" x1="385.769" y1="72.3577" x2="464.185" y2="74.4222" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
				<linearGradient id="paint3_linear_184_426" x1="236.806" y1="72.3577" x2="353.765" y2="76.9544" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
				<linearGradient id="paint4_linear_184_426" x1="120.994" y1="72.3577" x2="217.968" y2="75.5162" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
				<linearGradient id="paint5_linear_184_426" x1="1.25609" y1="72.8745" x2="89.3583" y2="75.4626" gradientUnits="userSpaceOnUse">
					<stop stopColor="#2492FF"/>
					<stop offset="1" stopColor="#045C94"/>
				</linearGradient>
			</defs>
		</motion.svg>
	);
}

export default Brandname;
