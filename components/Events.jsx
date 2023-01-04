import { Button } from '@mui/material';
import React from 'react';
import { EventCard } from './EventCard';
import { motion } from 'framer-motion';

export const Events = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="text-center p-5 flex flex-col items-center justify-center py-10 bg-stone-50"
		>
			<h1 className="text-xl text-gray-600 uppercase font-bold tracking-wide sm:tracking-widest">
				Upcoming Events
			</h1>

			<div className="mt-5 flex space-x-1 sm:space-x-14">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<EventCard
						serviceName={'Monday Prayers'}
						day="Monday"
						time={'8am - 9am'}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<EventCard
						serviceName={'Wednesday Prayers'}
						day="Wednesday"
						time={'7pm - 9pm'}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<EventCard
						serviceName={'Dominion Encounter'}
						day="Thursday"
						time={'7pm - 8:30pm'}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<EventCard
						serviceName={'Main Service'}
						day="Sunday"
						time={'8am - 11:30am'}
						className="hidden md:block"
					/>
				</motion.div>
			</div>

			<div className="text-gray-600 sm:text-gray-700 space-y-2 text-xs sm:text-sm mt-10">
				<p className="text-center">
					It is a privilege to give back to God what He has graciously given. We
					commit to being good stewards of your generosity
				</p>
				<Button variant="text">Give Online</Button>
			</div>
		</motion.div>
	);
};
