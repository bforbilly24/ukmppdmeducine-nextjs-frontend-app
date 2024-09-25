'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/shadcn/ui/button';
import { MoonIcon } from '@/components/svgs/moon-icon';
import { SunIcon } from '@/components/svgs/sun-icon';

function ToggleTheme() {
	const { setTheme, resolvedTheme } = useTheme();

	const handleToggle = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<div className='hidden xl:block'>
				<Button variant='icon' size='icon' onClick={handleToggle}>
					<SunIcon className='fill-black hover:fill-secondary-200 xl:h-[1.2rem] xl:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='fill-white hover:fill-secondary-200 absolute xl:h-[1.2rem] xl:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</div>

			<div className='block xl:hidden'>
				<Button variant='outline' size='icon' onClick={handleToggle}>
					<SunIcon className='fill-black h-9 w-9 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='fill-white absolute h-9 w-9 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</div>
		</>
	);
}

export default ToggleTheme;
