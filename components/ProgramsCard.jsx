import Image from 'next/image';
import React from 'react';

export const ProgramsCard = ({ day, icon, time, serviceName, style }) => {
	return (
		<div
			className={`flex flex-col text-center text-xs sm:text-md items-center flex-shrink-0 p-3 px-7 md:px-8 lg:p-5 lg:px-14 rounded-xl hover:scale-95 hover:cursor-pointer transition-all duration-500 ${style}`}
		>
			<Image
				src={icon}
				alt=""
				className="w-16 h-16 sm:w-20 sm:h-20 p-2 sm:p-4"
				priority
			/>
			<div className="max-w-[5rem]">
				<h1 className="font-bold mb-2 text-sm ">{serviceName}</h1>
				<h1 className="text-gray-600">{day}</h1>
				<h1 className=" text-gray-600 font-semibold">{time}</h1>
			</div>
		</div>
	);
};
