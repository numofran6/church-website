import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';

export const Swipe = ({ children }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{ delay: 3000, disableOnInteraction: false }}
			loop={true}
			slidesPerView={1}
			navigation={true}
			pagination={{ clickable: true }}
			className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-full flex items-center justify-center shadow-xl"
		>
			{children}
		</Swiper>
	);
};
