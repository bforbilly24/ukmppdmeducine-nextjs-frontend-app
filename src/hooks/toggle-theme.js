'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from '@/components/shadcn/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/shadcn/ui/dropdown-menu';
import { MoonIcon } from '@/components/svgs/moon-icon';
import { SunIcon } from '@/components/svgs/sun-icon';

function ToggleTheme() {
	const { setTheme, theme } = useTheme();

	const handleToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<div className='hidden xl:block'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' size='icon'>
							<SunIcon className='fill-black xl:h-[1.2rem] xl:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<MoonIcon className='fill-white absolute xl:h-[1.2rem] xl:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Toggle Button for Mobile screens */}
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