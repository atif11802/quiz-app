import Link from "next/link";
import React from "react";

const Home = () => {
	return (
		<div className=' h-[400px]  flex items-center justify-center'>
			<div className='w-[50%] h-[50%] flex flex-col items-center justify-center'>
				<Link href='/iq/1' className=' w-full '>
					<div
						className='p-5 text-2xl border-2 border-green-500 dark:border-purple-600 rounded-2xl text-center cursor-pointer
               hover:bg-green-600 dark:hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out
               
            '
					>
						iq 1
					</div>
				</Link>{" "}
				<Link href='/iq/2' className=' w-full '>
					<div
						className='p-5 mt-3  text-2xl border-2 border-green-500 dark:border-purple-600  rounded-2xl text-center cursor-pointer
               hover:bg-green-600 dark:hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out
               
            '
					>
						iq 2
					</div>
				</Link>
				<Link href='/iq/3' className=' w-full '>
					<div
						className='p-5  mt-3 text-2xl border-2 border-green-500 dark:border-purple-600  rounded-2xl text-center cursor-pointer
               hover:bg-green-600 dark:hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out
               
            '
					>
						iq 3
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
