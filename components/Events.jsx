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
		<div className="h-[30vh] sm:h-[45vh] flex flex-col items-center bg-stone-100 justify-center space-y-3 sm:space-y-5 py-5">
			<h1 className="font-bold uppercase text-lg md:text-xl">Events</h1>

			<Swipe>
				{events.map((event, i) => (
					<SwiperSlide className="rounded-lg" key={i}>
						<Image
							src={event}
							alt="Event"
							className="w-full h-full rounded-lg"
						/>
					</SwiperSlide>
				))}
			</Swipe>
		</div>
	);
};
