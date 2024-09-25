/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		container: {
			// padding: '2.5rem',
			screens: {
				'2xl': '1440px',
			},
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50: '#eef8ff',
					100: '#d9efff',
					200: '#bce3ff',
					300: '#8ed3ff',
					400: '#59b8ff',
					500: '#2492ff',
					600: '#1b7af5',
					700: '#1463e1',
					800: '#174fb6',
					900: '#19458f',
					950: '#142b57',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50: '#f0f8ff',
					100: '#e0f1fe',
					200: '#bbe4fc',
					300: '#7ecffb',
					400: '#3ab6f6',
					500: '#109de7',
					600: '#047cc5',
					700: '#045c94',
					800: '#085584',
					900: '#0d476d',
					950: '#092d48',
				},
				textColor: {
					500: '#6E6E6E',
				},
				body: {
					500: '#181818',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				borderStyle: {
					dashed: 'dashed',
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			backgroundImage: {
				gradientBlue: 'linear-gradient(92deg, #2492FF 3.59%, #045C94 96.74%)',
			},
			boxShadow: {
				navbarShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
