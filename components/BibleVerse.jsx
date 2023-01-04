import { motion } from 'framer-motion';
import React from 'react';

export const BibleVerse = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="text-center bg-purple-400 text-white py-5 sm:p-5"
		>
			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="text-xl sm:text-2xl font-bold"
			>
				2023 THEME: <span className="uppercase">I am a Wonder</span>
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="italic text-[0.7rem] sm:text-sm"
			>
				I am as a wonder unto many; but thou art my strong refuge.{' '}
				<span>Psalm 71:7</span>
			</motion.p>
		</motion.div>
	);
};
