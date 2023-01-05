import React from 'react';
import { Tag } from './Tag';
import bible from '../public/assets/bible.png';
import church from '../public/assets/church.png';
import pray from '../public/assets/pray.png';
import question from '../public/assets/question.png';
import { motion } from 'framer-motion';

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="min-h-[30vh] py-10 flex justify-center"
		>
			<div className="lg:max-w-5xl md:max-w-3xl max-w-xl md:grid grid-cols-4 justify-center items-center mx-auto px-8 sm:px-0">
				<div className="flex flex-col items-center md:items-start md:col-span-2 text-center md:text-left space-y-5">
					<div>
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							className="font-bold text-gray-700 text-lg uppercase"
						>
							About
						</motion.h1>
						<h1 className="text-4xl font-bold md:font-normal sm:text-amber-400">
							Our Church
						</h1>
					</div>
					<p className="font-bold text-gray-700">
						Our mission is to spread the Word of God and the Good News
					</p>

					<p className="text-sm text-justify text-gray-500">
						We have a strong sense of community. People and children of all ages
						here are encouraged to learn about their own faith and the role of
						the church in our community and worldwide. We invite anyone and
						everyone to attend our Sunday gathering to celebrate God in song,
						scripture and prayer
					</p>
				</div>

				<div className="md:col-span-2 mt-10 md:mt-0 space-y-2">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-end justify-center md:justify-end"
					>
						<Tag
							icon={pray}
							text={'Daily Prayers'}
							style="w-40 sm:w-44 h-28 bg-stone-100"
						/>
						<Tag
							icon={bible}
							text={'Continuous Teaching'}
							style={'w-40 sm:w-44 h-44 bg-stone-300'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-start justify-center md:justify-end"
					>
						<Tag
							icon={question}
							text={'Community Helpers'}
							style={'w-40 sm:w-44 h-44 bg-stone-300'}
						/>
						<Tag
							icon={church}
							text={'Set of Sermons'}
							style={'w-40 sm:w-44 h-28 bg-stone-100'}
						/>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};
