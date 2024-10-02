import '@/styles/globals.css';
import { Poppins as Font } from 'next/font/google';
import { Credit } from '@/components/credit/credit';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navigation/navbar';
import { SplashScreen } from '@/components/splah/splash-screen';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/footer/footer';
import BarUpdateNotification from '@/components/miscellaneous/bar-update-notification';
import { Test } from '@/components/navigation/test';
import WhatsappFloating from '@/components/miscellaneous/whatsapp-floating';

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
			<body className={`${font.className} overflow-x-hidden`}>
				<main>
					<ThemeProvider attribute='class'>
						<ProgressBarProvider>
                            {/* <SplashScreen /> */}
                            <Header />
                            <Navbar />
                            {/* <Test /> */}
							{children}
                            <BarUpdateNotification />
                            <WhatsappFloating />
							<Footer />
							<Credit />
						</ProgressBarProvider>
					</ThemeProvider>
				</main>
			</body>
		</html>
	);
}
