import Image from 'next/image';
import React from 'react';

export const EventCard = ({ day, icon, time, serviceName, ...rest }) => {
	return (
		<div {...rest}>
			<div className="flex flex-col items-center">
				<Image
					src={icon}
					alt=""
					className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-300 p-2 sm:p-4 rounded-full"
				/>
				<h1 className="text-gray-800 font-bold">{serviceName}</h1>
				<h1 className="text-gray-600 text-sm">{day}</h1>
				<h1 className="text-sm text-gray-600 font-semibold">{time}</h1>
			</div>
		</div>
	);
};
