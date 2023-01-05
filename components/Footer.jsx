import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	return (
		<div className="text-center py-5 bg-stone-100">
			<Link
				href={'#home'}
				className="uppercase text-amber-500 hover:text-black transition duration-300 ease-out"
			>
				Go up
			</Link>
			<p className="text-xs sm:text-sm text-gray-700">
				Be the goodness in the world!
			</p>
		</div>
	);
};
