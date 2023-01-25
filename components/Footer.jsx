import Link from 'next/link';
import React from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';

export const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center space-y-2 py-7 bg-stone-100">
			<Link
				href={'#home'}
				className=" hover:text-amber-500 text-black transition duration-300 ease-out"
			>
				<BiUpArrowCircle className="w-8 h-8" />
			</Link>
			<p className="text-xs sm:text-sm text-gray-700">
				Be the goodness in the world!
			</p>
		</div>
	);
};
