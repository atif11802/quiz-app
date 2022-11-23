import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div className='h-16  border-b-2  dark:border-purple-400 '>
			<div className='flex justify-around items-center h-full'>
				<div className=''>
					<Link href='/' className='text-green-500 text-2xl'>
						Home
					</Link>
				</div>
				<div className=''>
					{currentTheme === "dark" ? (
						<button
							className='bg-black-700 hover:bg-black w-20 items-center flex rounded-md border-purple-400 border-2 p-2'
							onClick={() => setTheme("light")}
						>
							{" "}
							<Image src='/sun.svg' alt='logo' height={20} width={20} />
							<p className='text-xl text-purple-400'>light</p>
						</button>
					) : (
						<button
							className='bg-gray-100 w-20 rounded-md flex items-center border-purple-400 border-2 p-2 hover:bg-gray-300'
							onClick={() => setTheme("dark")}
						>
							<Image src='/moon.svg' alt='logo' height={20} width={20} />
							<p className='text-xl'>dark</p>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
