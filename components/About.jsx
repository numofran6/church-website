import React from 'react';
import { Tag } from './Tag';
import bible from '../public/assets/bible.png';
import church from '../public/assets/church.png';
import pray from '../public/assets/pray.png';
import question from '../public/assets/question.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const About = () => {
	return (
		<div className="min-h-[30vh] py-10 flex justify-center">
			<div className="lg:max-w-5xl md:max-w-3xl max-w-xl lg:grid grid-cols-4 justify-center items-center mx-auto lg:px-10">
				<div className="flex flex-col items-center lg:items-start lg:col-span-2 text-center lg:text-left md:max-w-xl lg:max-w-none space-y-5 px-8 lg:px-0 sm:text-sm text-xs">
					<div>
						<h1 className="font-bold text-gray-700 text-lg uppercase">About</h1>
						<h1 className="text-4xl font-bold md:font-normal sm:text-amber-400">
							Our Church
						</h1>
					</div>

					<div className="">
						<h3 className=" text-gray-500 uppercase text-sm font-bold">
							Our Mission
						</h3>
						<p className="text-gray-800  text-justify sm:text-left">
							We are people of God committed to the study, practice and spread
							of the knowledge of His Word by the power of the Holy Spirit
						</p>
					</div>

					<div>
						<h3 className=" text-gray-500 uppercase text-sm font-bold">
							Our Vision
						</h3>
						<p className="text-gray-800  text-justify sm:text-left">
							To develop members into Christ-like maturity and build health
							relations to take care of the needs of the Church and serve the
							Community
						</p>
					</div>

					<p className=" text-gray-500  text-justify sm:text-left">
						We invite anyone and everyone to attend our Sunday gathering to
						celebrate God.{' '}
						<Link
							href={'/gallery'}
							className="btns font-semibold hover:text-amber-800"
						>
							Explore Our Gallery
						</Link>{' '}
						to get familiar with us.
					</p>
				</div>

				<div className="lg:col-span-2 mt-10 lg:mt-0 space-y-2">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-end justify-center lg:justify-end"
					>
						<Tag
							icon={pray}
							text={'Daily Prayers'}
							style="w-36 sm:w-44 h-36 bg-stone-100"
						/>
						<Tag
							icon={bible}
							text={'Continuous Teaching'}
							style={'w-36 sm:w-44 h-44 bg-stone-300'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-start justify-center lg:justify-end"
					>
						<Tag
							icon={question}
							text={'Community Helpers'}
							style={'w-36 sm:w-44 h-44 bg-stone-300'}
						/>
						<Tag
							icon={church}
							text={'Set of Sermons'}
							style={'w-36 sm:w-44 h-36 bg-stone-100'}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
