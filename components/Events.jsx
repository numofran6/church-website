import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import event1 from '../public/assets/event1.jpg';
import event2 from '../public/assets/event2.png';
import event3 from '../public/assets/event3.jpg';
import event4 from '../public/assets/event4.jpg';
import { Swipe } from './Swiper';

const events = [event1, event2, event3, event4];

export const Events = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="h-[30vh] sm:h-[45vh] flex flex-col items-center bg-stone-100 justify-center space-y-3 sm:space-y-5 py-5"
		>
			<h1 className="font-bold uppercase text-lg md:text-xl">Events</h1>

			<Swipe>
				{events.map((event, i) => (
					<React.Fragment key={i}>
						<SwiperSlide className="rounded-lg">
							<Image
								src={event}
								alt="Event"
								className="w-full h-full rounded-lg"
							/>
						</SwiperSlide>
					</React.Fragment>
				))}
			</Swipe>
		</motion.div>
	);
};
