import React from 'react';
import { Tag } from './Tag';
import bible from '../public/assets/bible.png';
import church from '../public/assets/church.png';
import pray from '../public/assets/pray.png';
import question from '../public/assets/question.png';

export const About = () => {
	return (
		<div className="min-h-[30vh] py-10 flex justify-center">
			<div className="lg:max-w-5xl md:max-w-3xl max-w-xl md:grid grid-cols-4 gap-5 justify-center items-center mx-auto px-8 sm:px-0">
				<div className="hidden md:block space-y-5">
					<Tag icon={pray} text={'Daily Prayers'} />
					<Tag icon={bible} text={'Continuous Teaching'} />
				</div>

				<div className="flex flex-col items-center md:col-span-2 text-center space-y-5">
					<div>
						<h1 className="font-bold text-gray-600 uppercase">About</h1>
						<h1 className="text-4xl font-bold md:font-normal sm:text-yellow-300">
							Our Church
						</h1>
					</div>
					<p className="font-bold text-gray-700">
						Our mission is to share the Word of God and the Good News of Jesus
						Christ
					</p>

					<p className="text-sm text-justify text-gray-500">
						We have a strong sense of community. People and children of all ages
						here are encouraged to learn about their own faith and the role of
						the church in our community and worldwide. We invite anyone and
						everyone to attend our Sunday gathering to celebrate God in song,
						scripture and prayer
					</p>
				</div>

				<div className="hidden space-y-5 md:flex flex-col justify-center items-center">
					<Tag icon={question} text={'Community Helpers'} />
					<Tag icon={church} text={'Set of Sermons'} />
				</div>
			</div>
		</div>
	);
};
