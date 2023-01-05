import { motion } from 'framer-motion';
import Image from 'next/image';
import event1 from '../public/assets/event1.jpg';
import event2 from '../public/assets/event2.png';
import event3 from '../public/assets/event3.jpg';
import event4 from '../public/assets/event4.jpg';

export const Events = () => {
	return (
		<div className="h-[30vh] sm:h-[35vh] flex flex-col items-center bg-stone-100 justify-center space-y-5">
			<h1 className="font-bold uppercase text-lg md:text-xl">Events</h1>

			<div className="flex space-x-2 sm:space-x-4 cursor-pointer">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="w-20 h-[4.5rem] sm:w-36 sm:h-32 bg-emerald-300 hover:scale-105  transition duration-500 ease-out"
				>
					<Image src={event1} alt="Event 1" className="w-full h-full" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-20 h-[4.5rem] sm:w-36 sm:h-32 bg-emerald-300 hover:scale-105 flex flex-col justify-center transition duration-500 ease-out"
				>
					<Image src={event2} alt="Event 2" className="" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="w-20 h-[4.5rem] sm:w-36 sm:h-32 bg-gray-300 hover:scale-105 transition duration-500 ease-out"
				>
					<Image src={event3} alt="Event 3" className="w-full h-full" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="w-20 h-[4.5rem] sm:w-36 sm:h-32 bg-stone-600 relative hover:scale-110 transition duration-500 ease-out"
				>
					<Image src={event4} alt="Event 4" className="w-full h-full" />

					<h1 className="absolute h-full top-0 justify-center flex flex-col font-bold text-white text-xs sm:text-lg uppercase tracking-widest text-center w-full">
						<span className="bg-green-200/40 py-2">Worship</span>
					</h1>
				</motion.div>
			</div>
		</div>
	);
};
