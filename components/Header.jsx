import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sky from '../public/assets/sky2.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';

export const Header = () => {
	const [active, setActive] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="h-[50vh] sm:h-[60vh] w-[100vw] sm:w-full relative"
		>
			<motion.div
				initial={{ opacity: 0.5 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					src={sky}
					width={3950}
					height={4937}
					alt="Header"
					className="w-[100vw] h-[50vh] sm:h-[60vh] object-cover"
					priority
				/>
			</motion.div>

			<div className="absolute top-0 w-full text-white">
				<div className="bg-opacity-20 md:bg-opacity-10 bg-gray-200">
					<nav className="flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5 sm:px-0">
						<h1 className="text-lg font-bold">GLORIOUS HILL MINISTRIES</h1>

						<div className="hidden md:flex space-x-6 uppercase">
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

						<div className="md:hidden">
							{!active && (
								<RiMenu4Line
									onClick={() => setActive(!active)}
									className="w-8 h-8"
								/>
							)}
							{active && (
								<TfiClose
									onClick={() => setActive(!active)}
									className="w-8 h-8"
								/>
							)}
						</div>
					</nav>
				</div>

				<div className="min-h-[35vh] relative sm:min-h-[40vh] flex flex-col justify-center items-center md:space-y-5 text-xl">
					<h2 className="text-sm sm:text-[1rem] font-bold text-gray-400 mb-2">
						There is no other way except Jesus
					</h2>

					<div className="space-y-1 text-center font-bold text-[2.7rem] leading-[2.7rem] sm:leading-none sm:text-7xl">
						<h2>We love God.</h2>
						<h2 className="hidden md:block">We believe in God.</h2>
					</div>

					{active && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className="absolute top-0 bg-yellow-100 w-full h-[41vh] flex flex-col space-y-6 uppercase items-center justify-center"
							>
								<Link
									href={'#home'}
									onClick={() => setActive(!active)}
									className="btns"
								>
									Home
								</Link>
								<Link
									href={'#about'}
									onClick={() => setActive(!active)}
									className="btns"
								>
									About
								</Link>
								<Link
									href={'#contact'}
									onClick={() => setActive(!active)}
									className="btns"
								>
									Contact
								</Link>
								<Link
									href={'#events'}
									onClick={() => setActive(!active)}
									className="btns"
								>
									Events
								</Link>
							</motion.div>
						</>
					)}
				</div>
			</div>
		</motion.div>
	);
};
