import Link from 'next/link';
import React from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';

export const Footer = () => {
	return (
		<div className="text-center py-5 bg-stone-100">
			<Link
				href={'#home'}
				className=" hover:text-amber-500 text-black transition duration-300 ease-out flex items-center justify-center"
			>
				<BiUpArrowCircle className="w-8 h-8" />
			</Link>
			<p className="text-xs sm:text-sm text-gray-700">
				Be the goodness in the world!
			</p>
		</div>
	);
};
