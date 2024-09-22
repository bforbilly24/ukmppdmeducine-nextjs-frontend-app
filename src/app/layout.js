import '@/styles/globals.css';
import { Poppins as Font } from 'next/font/google';
import { Credit } from '@/components/credit/credit';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import { ThemeProvider } from 'next-themes';

const font = Font({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata = {
	title: {
		template: '%s | UKMPPD',
		default: 'Home',
	},
	description: 'UKMPPD - Kelas Bimbingan Ujian Kompetensi MahasiswaProgram Pendidikan Dokter',
};

export const viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1.0,
	userScalable: false,
	targetDensitydpi: 'device-dpi',
};

export default async function RootLayout({ children }) {
	return (
		<html lang='id' suppressHydrationWarning={true} className='scroll-smooth'>
			<body className={font.className}>
				<ThemeProvider attribute='class'>
					<ProgressBarProvider>
						<main className='h-full flex flex-col'>
							{children}
							<Credit />
						</main>
					</ProgressBarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
