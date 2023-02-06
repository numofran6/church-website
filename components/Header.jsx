import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import sky from '../public/assets/bg3.jpg';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 100 },
};

export const Header = () => {
	const [active, setActive] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setActive(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className="h-[50vh] sm:h-[70vh] w-[100vw] sm:w-full relative">
			<Image
				src={sky}
				width={3950}
				height={4937}
				alt="Header"
				className="w-[100vw] h-[50vh] sm:h-[70vh] object-cover"
				priority
			/>

			<div className="absolute top-0 w-full text-white z-10">
				<div className="bg-cyan-600/10">
					<nav className="flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5">
						<h1 className="sm:text-lg font-bold">GLORIOUS HILL MINISTRIES</h1>

						<div className="hidden md:flex space-x-6 uppercase">
							<Link href={'#home'} className="navlinks">
								Home
							</Link>
							<Link href={'events'} className="navlinks">
								Events
							</Link>
							<Link href={'#about'} className="navlinks">
								About
							</Link>
							<Link href={'#contact'} className="navlinks">
								Contact
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
			</div>

			<div className="absolute top-0 h-full w-full text-white">
				<div className="h-full relative flex flex-col justify-center items-center space-y-5">
					<h2 className="text-sm sm:text-[1rem] font-bold text-gray-100">
						There is no other way except Jesus
					</h2>

					<div className="space-y-1 text-center font-bold text-[2.7rem] leading-[2.7rem] text-xl sm:leading-none md:text-5xl lg:text-7xl">
						<h2>We love God.</h2>
						<h2 className="hidden md:block">We believe in God.</h2>
					</div>

					{active && (
						<>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={list}
								ref={wrapperRef}
								className="absolute top-[3.3rem] bg-yellow-100 w-full h-[40vh] md:hidden flex flex-col space-y-5 uppercase items-center justify-center font-semibold"
							>
								<motion.div variants={item}>
									<Link
										href={'#home'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										Home
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'events'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										Events
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'#about'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										About
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'#contact'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										Contact
									</Link>
								</motion.div>
							</motion.div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
