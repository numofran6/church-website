import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Footer } from './Footer';

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

export const Layout = ({ children, title }) => {
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
		<>
			<Head>
				<title>{title ? title + ' - Glorious Hill' : 'Glorious Hill'}</title>
			</Head>

			<div className="flex flex-col">
				<header className="bg-yellow-800 text-white">
					<nav className="flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5">
						<h2 className="sm:text-lg font-bold ">GLORIOUS HILL MINISTRIES</h2>

						<div className="hidden md:flex space-x-6 uppercase">
							<Link href={'/#home'} className="btns">
								Home
							</Link>
							<Link href={'events'} className="btns">
								Events
							</Link>
							<Link href={'/#about'} className="btns">
								About
							</Link>
							<Link href={'/#contact'} className="btns">
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

					{active && (
						<>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={list}
								ref={wrapperRef}
								className="absolute top-[4.5rem] bg-yellow-100 w-full h-[41vh] md:hidden flex flex-col space-y-5 uppercase items-center justify-center z-20 font-semibold"
							>
								<motion.div variants={item}>
									<Link
										href={'/#home'}
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
										href={'/#about'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										About
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'/#contact'}
										onClick={() => setActive(!active)}
										className="btns"
									>
										Contact
									</Link>
								</motion.div>
							</motion.div>
						</>
					)}
				</header>

				<main>{children}</main>

				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
