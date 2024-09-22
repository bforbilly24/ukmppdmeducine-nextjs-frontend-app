import Link from 'next/link';
import { Button } from '@/components/shadcn/ui/button';
import { Section } from '@/components/sections/section';

export const metadata = {
	title: 'Halaman Tidak Ditemukan',
};

export default function RootNotFound() {
	return (
		<Section className='grid h-screen w-screen place-items-center content-center gap-5'>
			<div>
				<b>404</b> | Halaman ini tidak dapat ditemukan
			</div>
			<Link href='/admin' className='focus:outline-none'>
				<Button variant='outline'>Kembali ke beranda</Button>
			</Link>
		</Section>
	);
}