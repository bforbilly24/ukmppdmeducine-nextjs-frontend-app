'use server';

async function getServerstatus() {
	const options = {
		method: 'GET',
		cache: 'no-store',
	};

	const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/status`;

	try {
		const res = await fetch(apiUrl, options);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Error fetching server status:', error);
		return null;
	}
}

export { getServerstatus };