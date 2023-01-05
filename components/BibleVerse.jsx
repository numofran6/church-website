import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import bible from '../public/assets/prayerss.png';

export const BibleVerse = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="text-center bg-yellow-100 text-amber-400 py-2 sm:p-3"
		>
			<motion.h1 className="text-lg sm:text-2xl font-bold">
				2023 THEME: <span className="uppercase">I am a Wonder</span>
			</motion.h1>

			<motion.p className="italic text-[0.6rem] sm:text-xs flex items-center justify-center ">
				<span className="flex items-center mr-2 font-bold">Psalm 71:7 -</span>
				<span>I am as a wonder unto many; but thou art my strong refuge.</span>
			</motion.p>
		</motion.div>
	);
};
