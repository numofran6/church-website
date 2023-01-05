import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sky from '../public/assets/sky2.jpg';
import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
	const [active, setActive] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="h-[50vh] sm:h-[60vh] w-[100vw] sm:w-full relative"
		>
			<Image
				src={sky}
				width={3950}
				height={4937}
				alt="Header"
				className="w-[100vw] h-[50vh] sm:h-[60vh] object-cover"
				priority
			/>

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

						<Hamburger onClick={() => setActive(!active)}>
							<div className={`hamburger-icon ${active ? 'active' : ''}`}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</Hamburger>
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

const Hamburger = styled.div`
	display: flex;
	transition: 0.5s;
	cursor: pointer;
	height: 20px;
	justify-content: center;
	margin-right: 5px;
	@media (min-width: 768px) {
		display: none;
	}
	.hamburger-icon {
		position: relative;
		width: 45px;
		display: flex;
		align-items: center;
		transform: rotate(0);
		transition: 1s;
		span {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			border-radius: 50px;
			background-color: white;
			transition: 0.5s;
		}
		span:nth-child(1) {
			top: 0;
			left: 0;
			width: 50%;
			transform: translateY(0);
		}
		span:nth-child(2) {
			width: 100%;
			transform: scaleX(1);
			opacity: 1;
		}
		span:nth-child(3) {
			bottom: 0;
			right: 0;
			width: 50%;
			transform: rotate(0);
		}
	}
	.active {
		transform: rotate(315deg);
		span:nth-child(1) {
			width: 70%;
			transform: translateY(4px);
			background-color: #fbbf24;
		}

		span:nth-child(2) {
			width: 70%;
			transform: rotate(90deg);
			bottom: 13.5px;
			background-color: #fbbf24;
		}

		span:nth-child(3) {
			transform: scaleX(0);
			opacity: 0;
		}
	}
`;
