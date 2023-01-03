import Image from 'next/image';
import React from 'react';

export const Tag = ({ icon, text }) => {
	return (
		<div className="bg-gray-100 flex flex-col items-center justify-center space-y-1 w-44 h-28 text-gray-600 text-xs">
			<Image
				src={icon}
				alt={text}
				width={512}
				height={512}
				className="w-10 h-10 opacity-60"
			/>

			<h1>{text}</h1>
		</div>
	);
};
