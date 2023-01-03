import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sky from '../public/assets/sky2.jpg';

export const Header = () => {
	return (
		<div className="h-[50vh] sm:h-[60vh] w-[100vw] sm:w-full relative">
			<Image
				src={sky}
				width={3950}
				height={4937}
				alt="Header"
				className="w-[100vw] h-[50vh] sm:h-[60vh] object-cover"
				priority
			/>

			<div className="absolute top-0 w-full text-white">
				<div className="bg-opacity-10 bg-gray-200">
					<nav className="flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5 sm:px-0">
						<h1 className="text-lg font-bold">GLORIOUS HILL MINISTRIES</h1>

						<div className="hidden sm:flex space-x-6 uppercase">
							<Link href={'#home'} className="btns">
								Home
							</Link>
							<Link href={'#about'} className="btns">
								About
							</Link>
							<Link href={'#contact'} className="btns">
								Contact
							</Link>
							<Link href={'#events'} className="btns">
								Events
							</Link>
						</div>
					</nav>
				</div>

				<div className="min-h-[35vh] sm:min-h-[40vh] flex flex-col justify-center items-center space-y-7  text-xl">
					<h2 className="text-sm sm:text-lg text-gray-300">
						There is no other way except Jesus
					</h2>

					<div className="space-y-1 text-center font-bold text-[2.7rem] leading-[2.7rem] sm:leading-none sm:text-7xl">
						<h2>We love God.</h2>
						<h2>We believe in God.</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
