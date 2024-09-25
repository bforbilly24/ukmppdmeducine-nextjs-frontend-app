import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer id='footer' className={'bg-body-500 px-[3.125rem] pt-[6.25rem] dark:bg-gray-950'}>
			<div className='container mx-auto flex h-fit w-full items-center justify-center pb-[1.875rem]'>
				<div className='flex w-full flex-col gap-y-[3.75rem]'>
					<div className='grid grid-cols-3'>
						<div className='flex flex-col items-start justify-center gap-y-5 pr-[6.25rem]'>
							<Image src='/svgs/brand.svg' alt='brand-ukmppd' width={148} height={26} />
							<p className='text-[1.063rem] leading-7 text-white/80 hover:text-white'>Pilihan Belajar dengan Tutor, Sistem dan Pola Pikir TERBAIK untuk persiapan ujianmu bersama Meducine.</p>
						</div>

						<div className='flex flex-col gap-y-5'>
							<p className='text-xl leading-[1.625rem] text-white'>Information</p>
							<ul className='space-y-2'>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<span className="before:mr-2 before:text-secondary-500 before:content-['▶']" />
									<Link href='/tentang-kami' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
										Tentang Kami
									</Link>
								</li>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<span className="before:mr-2 before:text-secondary-500 before:content-['▶']" />
									<Link href='/programs' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
										Programs
									</Link>
								</li>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<span className="before:mr-2 before:text-secondary-500 before:content-['▶']" />
									<Link href='/kontak' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
										Kontak
									</Link>
								</li>
							</ul>
						</div>

						<div className='flex flex-col gap-y-5'>
							<p className='text-xl leading-[1.625rem] text-white'>Tetap Terhubung Bersama Kami</p>
							<ul className='space-y-2'>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<div className='flex gap-x-[0.625rem]'>
										<Image src='/svgs/icons/facebook.svg' alt='facebook-icon' width={20} height={21} />
										<Link href='/tentang-kami' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
											Facebook
										</Link>
									</div>
								</li>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<div className='flex gap-x-[0.625rem]'>
										<Image src='/svgs/icons/twitter.svg' alt='twitter-icon' width={20} height={17} />
										<Link href='/tentang-kami' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
											Twitter
										</Link>
									</div>
								</li>
								<li className='flex transform items-center gap-2 transition-transform hover:translate-x-1 hover:scale-105 group'>
									<div className='flex gap-x-[0.625rem]'>
										<Image src='/svgs/icons/linkedin.svg' alt='linkedin-icon' width={18} height={19} />
										<Link href='/tentang-kami' className='text-[1.063rem] text-white/80 transition group-hover:text-white/90'>
											LinkedIn
										</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex items-center justify-between gap-x-[0.188rem] border-t border-dashed border-t-white/25 pt-[1.875rem]'>
						<p className='text-[0.938rem] leading-[1.313rem] text-white/80'>UKMPPD - Meducine</p>
						<p className='text-[0.938rem] leading-[1.313rem] text-white'>Allright Reserved - Made By Meducine</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export { Footer };
