import { Button } from '@mui/material';
import React from 'react';
import { EventCard } from './EventCard';

export const Events = () => {
	return (
		<div className="text-center p-5 flex flex-col items-center justify-center py-10 bg-stone-50">
			<h1 className="text-xl text-gray-600 uppercase font-bold tracking-wide sm:tracking-widest">
				Upcoming Events
			</h1>

			<div className="mt-5 flex space-x-1 sm:space-x-14">
				<EventCard
					serviceName={'Monday Prayers'}
					day="Monday"
					time={'8:00am - 9:00am'}
				/>
				<EventCard
					serviceName={'Wednesday Prayers'}
					day="Wednesday"
					time={'7:00pm - 9:00pm'}
				/>
				<EventCard
					serviceName={'Dominion Encounter'}
					day="Thursday"
					time={'7:00pm - 8:00pm'}
				/>
				<EventCard
					serviceName={'Main Service'}
					day="Sunday"
					time={'8:00am - 11:30am'}
					className="hidden md:block"
				/>
			</div>

			<div className="text-gray-600 sm:text-gray-700 space-y-2 text-xs sm:text-sm mt-10">
				<p className="text-center">
					It is a privilege to give back to God what He has graciously given. We
					commit to being good stewards of your generosity
				</p>
				<Button variant="text">Give Online</Button>
			</div>
		</div>
	);
};
