import Image from 'next/image';
import React from 'react';

export const ProgramsCard = ({ day, icon, time, serviceName, style }) => {
	return (
		<div
			className={`flex flex-col text-xs sm:text-md sm:hover:scale-110 transition duration-500 cursor-pointer ease-in-out items-center ${style}`}
		>
			<Image
				src={icon}
				alt=""
				className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-300 p-2 sm:p-4 rounded-full"
			/>
			<h1 className="text-gray-800 font-bold mb-2 text-sm">{serviceName}</h1>
			<h1 className="text-gray-600">{day}</h1>
			<h1 className=" text-gray-600 font-semibold">{time}</h1>
		</div>
	);
};
