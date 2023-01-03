import React from 'react';

export const EventCard = ({ day, time, serviceName, ...rest }) => {
	return (
		<div {...rest}>
			<h1 className="text-gray-800 font-bold">{serviceName}</h1>
			<h1 className="text-gray-400">{day}</h1>
			<h1 className="text-sm">{time}</h1>
		</div>
	);
};
