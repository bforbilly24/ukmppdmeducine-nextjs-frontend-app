import ProgramSection from '@/components/sections/program-section';
import RegistrationStepSection from '@/components/sections/registration-step-section';
import { Section } from '@/components/sections/section';
import AvatarCircles from '@/components/shadcn/ui/avatar-circles';
import CardHeroBackground from '@/components/svgs/card-hero-background';
import { ChevronDown } from '@/components/svgs/chevron-down-icon';
import { ChevronRight } from '@/components/svgs/chevron-right-icon';
import { ChevronUp } from '@/components/svgs/chevron-up-icon';
import { WhatsappIcon } from '@/components/svgs/whatsapp-icon';
import { avatarUrls, programLists } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			<Section id={'hero'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
				<Image src='/svgs/backgrounds/hero-background-gradient-blue.svg' alt='hero-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				<Image src='/svgs/particles/home/circle-1.svg' alt='particle-circle-1' width={30} height={30} className='absolute left-[2.813rem] top-[8.938rem]' />
				<Image src='/svgs/particles/home/circle-5.svg' alt='particle-circle-5' width={45} height={44} className='absolute right-[4.344rem] top-[8.938rem]' />

				<div className='container relative mx-auto flex h-[53.875rem] w-full items-start justify-center px-[3.125rem] pb-[9.375rem] pt-[15.625rem]'>
					<div className='flex w-full items-center justify-center gap-x-5'>
						<div className='relative flex h-fit w-full flex-col items-start justify-center gap-y-[1.875rem]'>
							<Image src='/svgs/particles/home/circle-2.svg' alt='particle-circle-2' width={35} height={35} className='absolute left-0 top-[3.25rem]' />
							<Image src='/svgs/particles/home/circle-3.svg' alt='particle-circle-3' width={20} height={21} className='absolute right-[19.375rem] top-0' />
							<Image src='/svgs/particles/home/circle-4.svg' alt='particle-circle-4' width={50} height={50} className='absolute right-[10.063rem] top-2' />
							<p className='bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-[0.875rem] font-medium uppercase tracking-[25%] text-transparent'>UKMPPD by meducine</p>
							<div className='flex flex-col gap-y-[0.625rem]'>
								<h4 className='text-[2.5rem] font-semibold leading-[3.656rem] text-textColor-black-500 dark:text-gray-50'>
									Kelas <span className='bg-gradientBlue bg-clip-text text-transparent'>Bimbingan Ujian Kompetensi</span> Mahasiswa Program Pendidikan Dokter
								</h4>
								<p className='text-[1.063rem] leading-[1.75rem] text-textColor-gray-500 dark:text-gray-300'>Pilihan Belajar dengan Tutor, Sistem dan Pola Pikir TERBAIK untuk persiapan ujianmu bersama Meducine.</p>
							</div>
							<div className='flex flex-row gap-x-[1.875rem]'>
								<Link href='https://api.whatsapp.com/send?phone=6281931633594&text=Halo%21%20saya%20ada%20masalah%20dengan%20meducine%2C%20mohon%20dibantu' passHref>
									<button className='flex h-fit w-fit items-center justify-center gap-x-3 rounded-[0.313rem] bg-gradient-to-t from-[#24FF54] to-[#04942C] px-[2.188rem] py-[1rem]'>
										<WhatsappIcon className={'fill-white'} />
										<p className='text-[0.938rem] font-medium leading-[1.219rem] text-white'>Daftar</p>
									</button>
								</Link>

								<button className='flex h-fit w-fit items-center justify-center gap-x-3 rounded-[0.313rem] bg-white px-[2.188rem] py-[1rem] shadow-buttonHeroShadow hover:bg-gray-100'>
									<p className='text-[0.938rem] font-medium leading-[1.219rem] text-primary-500'>Pelajari Lebih Lanjut</p>
								</button>
							</div>
						</div>

						<div className='relative flex h-[23.313rem] w-full items-center justify-end pr-5'>
							<Image src='/svgs/particles/home/circle-6.svg' alt='particle-circle-6' width={45} height={45} className='absolute bottom-[6.5rem] left-[5.813rem]' />
							<Image src='/svgs/particles/home/circle-7.svg' alt='particle-circle-7' width={45} height={44} className='absolute right-10 top-[0.438rem]' />

							<Image src='/svgs/backgrounds/circle-hero-gradient-background.svg' alt='circle-hero-background' width={300} height={300} className='absolute -top-2 right-[27.625rem]' />
							<div className='relative flex h-[23.25rem] w-[30.25rem] items-center justify-center'>
								<CardHeroBackground />

								<Image src='/images/characters/hero-character.png' alt='hero-character' width={362} height={428} className='absolute -right-5 bottom-0 z-10' />
								{/* <Image src='/svgs/hand-writes/hero-hand-write.svg' alt='hero-hand-write' width={252} height={69} className='absolute left-[1.625rem] top-[38.5px]' /> */}
								<Image src='/svgs/particles/star-particle.svg' alt='hero-hand-write' width={21} height={175} className='absolute -bottom-[1.464rem] left-[0.309rem]' />
								<Image src='/svgs/backgrounds/circle-hero-background.svg' alt='circle-hero-background' width={623} height={623} className='absolute -top-[15.219rem] left-[1.625rem]' />
							</div>
							<div className='absolute -bottom-[8.688rem] left-[1rem] z-20 h-fit w-[26.25rem] rounded-[1.25rem] bg-white px-5 py-7 shadow-cardHeroShadow dark:bg-gray-100'>
								<div className='flex flex-col gap-y-3'>
									<p className='text-xl font-medium text-textColor-black-400'>
										Ini yang Akan Anda dapatkan di<span className='bg-gradientBlue bg-clip-text text-transparent'> UKMPPD</span>
									</p>
									<p className='text-sm font-normal text-textColor-gray-400'>
										<span className='font-bold'>PROGRAM BIMBINGAN </span>
										dengan <span className='font-bold'>POLA PIKIR</span> yang disusun berdasarkan standar kompetensi terbaru dan guideline terlengkap. Peserta dapat tanya jawab ke tim Tutor selama menjadi peserta bimbingan
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section id={'banner-partner'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
				<div className='container relative mx-auto flex h-fit w-full items-center justify-center'>
					<Image src='/images/backgrounds/home/banner-hero-background.png' alt='banner-home-background' fill className='absolute inset-0 z-0 object-cover' />
					<div className='relative flex h-[16.125rem] w-full items-center justify-center bg-primary-500/80 shadow-bannerShadow'>
						<Image src='/svgs/backgrounds/background-gradient-blue.svg' alt='background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
					</div>

					<div className='absolute top-[7.25rem] z-10 flex w-[83.75rem] items-center justify-center rounded-[0.313rem] bg-white/80 shadow-bannerPartnerShadow backdrop-blur-[1.25rem]'>
						<div className='flex flex-col gap-y-[3.125rem] px-[3.125rem] py-[3.125rem]'>
							<p className='bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-center text-[0.875rem] font-medium uppercase tracking-[25%] text-transparent'>UKMPPD by meducine</p>

							<div className='flex items-center justify-center gap-x-5'>
								<Image src='/images/partners/dokter-post.png' alt='partner-dokter-pos' width={100} height={100} />
								<Image src='/images/partners/dokter-care.png' alt='partner-dokter-care' width={100} height={100} />
							</div>
						</div>
					</div>
				</div>
				<Image src='/svgs/backgrounds/hexagonal-banner-background.svg' alt='hexagonal-banner-background' width={688} height={688} className='absolute -right-[21.5rem] -top-[13.438rem]' />
			</Section>

			<Section id={'step-register'} className={'relative h-[53.813rem] w-full bg-white dark:bg-gray-950'}>
				<Image src='/svgs/backgrounds/step-background-gradient-blue.svg' alt='step-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				<Image src='/svgs/backgrounds/step-main-background-gradient-blue.svg' alt='step-main-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				{/* <div className='absolute left-[21.875rem] top-[10rem] h-[2.188rem] w-[2.188rem] rounded-full bg-secondary-300/25' />
				<div className='absolute right-[13.625rem] top-[11.75rem] h-5 w-5 rounded-full bg-primary-500/50' /> */}
				<div className='container relative mx-auto flex h-fit w-full flex-col items-center justify-center gap-y-[3.75rem] px-[3.125rem] pb-[6.25rem] pt-[11.563rem]'>
					<div className='flex h-fit w-full items-center justify-between'>
						<div className='flex flex-col gap-y-5'>
							<p className='bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text capitalize text-transparent'>Mari Kita Mulai</p>
							<h4 className='text-[2.188rem] font-semibold capitalize text-textColor-black-500 dark:text-gray-50'>Langkah Pendaftaran Mudah</h4>
						</div>
						<div className='flex gap-x-5'>
							<AvatarCircles numPeople={false} avatarUrls={avatarUrls} />
							<div className='flex flex-col gap-y-[0.625rem]'>
								<p className='text-[2.188rem] font-semibold text-secondary-700'>1Jt&#43;</p>
								<p className='text-xl font-semibold capitalize leading-[1.625rem] text-textColor-black-500'>Orang-Orang percaya pada kami</p>
							</div>
						</div>
					</div>

					{/* Component of Registration Step Section */}
					<RegistrationStepSection />
				</div>
			</Section>

			<Section id={'our-program'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
				<Image src='/svgs/backgrounds/program-background-gradient-blue.svg' alt='program-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				<div className='container relative mx-auto flex h-fit w-full flex-col px-[3.125rem]'>
					<div className='flex flex-col items-center justify-center gap-y-10'>
						<div className='flex flex-col items-center justify-center gap-y-5'>
							<div className='flex flex-col items-center justify-center gap-y-2'>
								<h1 className='text-[4rem] font-semibold capitalize leading-[150%] text-textColor-black-400 dark:text-gray-100'>Program Kami</h1>
								<p className='text-sm leading-[150%] text-textColor-gray-500 dark:text-gray-400'>Benefit yang didapatkan sama hanya metode kelas saja yang berbeda.</p>
							</div>

							<button className='flex items-center justify-center gap-x-3 rounded-[0.313rem] bg-white px-[2.188rem] py-4 shadow-downloaButtonShadow hover:bg-gray-100 dark:hover:bg-gray-200'>
								<Image src='/svgs/icons/download.svg' alt='download-icon' width={21} height={21} />
								<p className='font-medium text-primary-500'>Unduh Brosur UKMPPD</p>
							</button>
						</div>

						<ProgramSection programLists={programLists} />
					</div>
				</div>
			</Section>

			<Section id={'banner-registration'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
				<Image src='/svgs/backgrounds/banner-registration-background-gradient-blue.svg' alt='banner-registration-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />

				<div className='absolute right-[22rem] top-[4.5rem] h-5 w-5 rounded-full bg-primary-500' />
				<div className='absolute left-[22.5rem] top-[4.5rem] h-5 w-5 rounded-full bg-primary-500/50' />
				<div className='absolute left-[25rem] top-[2.875rem] h-[2.188rem] w-[2.188rem] rounded-full bg-primary-400/25' />

				<div className='container relative mx-auto flex h-fit w-full px-[3.125rem] py-[6.25rem]'>
					<div className='relative flex w-full flex-row items-center justify-center gap-x-20 rounded-2xl bg-gradient-to-tl from-secondary-700 to-primary-500 px-[6.25rem] py-8'>
						<Image src='/svgs/banners/union-banner.svg' alt='union-banner' width={220} height={101} className='absolute bottom-1 right-[6.25rem]' />

						<div className='h-fit w-fit'>
							<Image src='/svgs/banners/hero-banner.svg' alt='hero-banner' width={306} height={302} />
						</div>

						<div className='flex flex-col gap-y-5'>
							<div className='flex flex-col gap-y-4'>
								<h4 className='text-[2.75rem] font-semibold capitalize text-white'>Daftar Jadi Member Sekarang</h4>
								<p className='text-base font-normal capitalize text-white'>Ribuan dokter telah Meducine bantu mencapai mimpinya. Gabung Komunitas Group Dokter terbesar di Indonesia.</p>
							</div>
							<Link href='https://api.whatsapp.com/send?phone=6281931633594&text=Halo%21%20saya%20ada%20masalah%20dengan%20meducine%2C%20mohon%20dibantu' passHref>
								<button className='flex h-fit w-fit items-center justify-center gap-x-3 rounded-[0.313rem] bg-white px-[2.188rem] py-[1rem]'>
									<WhatsappIcon className={'fill-primary-500'} />
									<p className='text-[0.938rem] font-medium leading-[1.219rem] text-primary-500'>Daftar</p>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</Section>

			<Section id={'newslatter'} className={'relative h-full w-full bg-white dark:bg-gray-950'}>
				<Image src='/svgs/backgrounds/newslatter-background-gradient-blue.svg' alt='newslatter-background-gradient-blue' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
				<div className='absolute left-[24.563rem] top-[3.875rem] h-[2.188rem] w-[2.188rem] rounded-full bg-[#5CB8E4]/25' />
				<div className='absolute right-[22.063rem] top-[2.625rem] h-5 w-5 rounded-full bg-primary-500' />
				<div className='container relative mx-auto flex h-fit w-full px-[3.125rem] py-[6.25rem]'>
					<div className='flex w-full flex-col items-center justify-center gap-y-[2.188rem]'>
						<div className='flex flex-col gap-y-5'>
							<p className='text-center font-medium uppercase tracking-[0.156rem] text-primary-500'>Berlangganan Newslatter Kami</p>
							<h4 className='text-center text-[2.188rem] font-semibold capitalize leading-[2.844rem] text-textColor-black-500'>Dapatkan Pembaruan Terbaru</h4>
						</div>
						<div className='flex w-fit gap-x-5'>
							<form className='shadow-formNewslatterShadow flex h-[3.188rem] w-[27.125rem] items-center rounded-[0.313rem] border border-white/25 bg-white px-[0.813rem] py-[0.938rem]'>
								<input type='email' placeholder='Enter your email' className='flex-grow bg-transparent text-black placeholder-gray-500 outline-none placeholder:text-[0.938rem] placeholder:font-normal placeholder:text-[#6E6E6E]/60' required />
							</form>

							<button className='to rounded-[0.313rem] bg-gradient-to-t from-primary-500 to-secondary-700 px-[2.188rem] py-[0.625rem] capitalize text-white hover:bg-gradient-to-t hover:from-primary-300 hover:to-secondary-500'>Subscribe</button>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
