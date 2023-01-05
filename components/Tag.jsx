import Image from 'next/image';
import React from 'react';

export const Tag = ({ icon, text, style }) => {
	return (
		<div
			className={` flex flex-col cursor-pointer items-center justify-center space-y-1  ${style} text-gray-600 text-xs rounded-xl hover:scale-105 transition duration-500 ease-in-out`}
		>
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
