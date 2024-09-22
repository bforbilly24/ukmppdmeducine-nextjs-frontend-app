import { getServerstatus } from '@/services/get-server-status';

export const metadata = {
	title: 'Status',
};

export default async function StatusPage() {
	const serverStatus = await getServerstatus();
	console.log(serverStatus);

	const isReady = serverStatus?.status === 'success';

	return (
		<>
			<div className='flex gap-4 p-4'>
				<div className='flex self-start text-xs text-white'>
					<div className='w-fit rounded-l bg-badge-primary px-1.5 py-0.5'>Status UKMPPD Meducine Server</div>
					<div className={`${isReady ? 'bg-badge-secondary' : 'bg-badge-error'} w-fit rounded-r px-1.5 py-0.5`}>{isReady ? 'pass' : 'failed'}</div>
				</div>
			</div>
		</>
	);
}