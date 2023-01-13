import { motion } from 'framer-motion';
import React from 'react';

export const BibleVerse = () => {
	return (
		<div className="text-center bg-yellow-100 text-amber-400 py-2 sm:p-3">
			<h1 className="text-lg sm:text-2xl font-bold">
				2023 THEME: <span className="uppercase">I am a Wonder</span>
			</h1>

			<p className="italic text-[0.6rem] sm:text-xs flex items-center justify-center ">
				<span className="flex items-center mr-2 font-bold">Psalm 71:7 -</span>
				<span>I am as a wonder unto many; but thou art my strong refuge.</span>
			</p>
		</div>
	);
};
