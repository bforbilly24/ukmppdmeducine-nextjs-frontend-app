'use client';

import { useEffect } from 'react';
import { authors } from '@/utils/authors';

function Credit() {
	useEffect(() => {
		if (typeof window !== undefined) {
			window.bforbilly24 = authors;
		}
	}, []);
}

export { Credit };
