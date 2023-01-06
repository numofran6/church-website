<div>
	<Head>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
		/>
	</Head>
	<div class="swiper">
		<div class="swiper-wrapper">
			{/* SLIDES */}
			<div class="swiper-slide"></div>
			<div class="swiper-slide">Slide 2</div>
			<div class="swiper-slide">Slide 3</div>
		</div>

		{/* PAGINATION */}
		<div class="swiper-pagination"></div>

		{/* NAVIGATION BUTTONS */}
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>

	<Script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></Script>
</div>;

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import event1 from '../public/assets/event1.jpg';
import event2 from '../public/assets/event2.png';
import event3 from '../public/assets/event3.jpg';
import event4 from '../public/assets/event4.jpg';
import { Slider } from './Slider';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const events = [event1, event2, event3, event4];

export const Event1 = () => {
	return (
		<div className="h-[30vh]">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				loop={true}
				slidesPerView={1}
				navigation={true}
				pagination={true}
				className="w-[60%] h-fit flex items-center justify-center"
			>
				{events.map((event, i) => (
					<React.Fragment key={i}>
						<SwiperSlide className="w-full h-full">
							<Image src={event} alt="Event" className="" />
						</SwiperSlide>
					</React.Fragment>
				))}
			</Swiper>
		</div>
	);
};
