import { BookReaderIcon } from "@/components/svgs/book-reader-icon";
import { BreifcaseMedicalIcon } from "@/components/svgs/briefcase-medical-icon";
import { StethoscopeIcon } from "@/components/svgs/stethoscope-icon";
import { SyringeIcon } from "@/components/svgs/syringe-icon";

const staticNavMenuItems = [
	{ id: '1', name: 'Home', slug: '/' },
	{ id: '2', name: 'Programs', slug: '/programs' },
	{ id: '3', name: 'Tentang Kami', slug: '/tentang-kami' },
	{ id: '4', name: 'Kontak', slug: '/kontak' },
];

const avatarUrls = [
	'/images/avatars/1-avatar.jpg',
	'/images/avatars/2-avatar.jpg',
	'/images/avatars/3-avatar.jpg',
];

const registrationSteps = [
	{ id: '01', img: '/svgs/registration-steps/1-step.svg', alt: 'registration-step-1', width: 157, height: 125, name: 'Daftar Akun', desc: 'Klik tombol Whatsapp, atau bisa click disini.' },
	{ id: '02', img: '/svgs/registration-steps/2-step.svg', alt: 'registration-step-2', width: 152, height: 125, name: 'Isi Data Diri', desc: 'Isi data diri dengan benar pada form data yang telah dikirimkan oleh CS lewat chat.' },
	{ id: '03', img: '/svgs/registration-steps/3-step.svg', alt: 'registration-step-3', width: 179, height: 125, name: 'Akun Siap', desc: 'Tunggu beberapa menit. Akun Anda sudah siap digunakan.' },
];

const programLists= [
    { id: '1', slug: '/1', icon: <SyringeIcon />, width: '51', height: '45', name: 'UKOM KEBIDANAN', desc: '1 Merupakan program bimbingan unggulan di Ingenio yang mempersiapkan mahasiswa klinik Kedokteran menghadapi CBT UKMPPD secara daring (online). Dengan berbagai fasilitas penunjang' },
    { id: '2', slug: '/2', icon: <BreifcaseMedicalIcon />, width: '51', height: '45', name: 'UKMP2DG', desc: '2 Merupakan program bimbingan unggulan di Ingenio yang mempersiapkan mahasiswa klinik Kedokteran menghadapi CBT UKMPPD secara daring (online). Dengan berbagai fasilitas penunjang' },
    { id: '3', slug: '/3', icon: <StethoscopeIcon />, width: '51', height: '45', name: 'UKMPPD', desc: '3 Merupakan program bimbingan unggulan di Ingenio yang mempersiapkan mahasiswa klinik Kedokteran menghadapi CBT UKMPPD secara daring (online). Dengan berbagai fasilitas penunjang' },
    { id: '4', slug: '/4', icon: <BookReaderIcon />, width: '51', height: '45', name: 'Try Out', desc: '4 Merupakan program bimbingan unggulan di Ingenio yang mempersiapkan mahasiswa klinik Kedokteran menghadapi CBT UKMPPD secara daring (online). Dengan berbagai fasilitas penunjang' },
]

const PROTECTED_PAGES = ['/', '/programs'];

export { staticNavMenuItems, avatarUrls, registrationSteps, programLists, PROTECTED_PAGES };
