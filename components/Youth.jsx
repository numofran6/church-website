import Image from 'next/image';
import youth from '../public/assets/youth.jpg';
import { motion } from 'framer-motion';

export const Youth = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="h-[30vh] sm:h-[40vh] relative text-white"
		>
			<Image
				src={youth}
				alt=""
				className="h-[30vh] sm:h-[40vh] w-[100vw] object-cover"
			/>

			<div className="absolute top-0 bg-emerald-700/70 h-full w-full text-center">
				<div className="mr-5 sm:mr-10 lg:mr-28 absolute right-0 max-w-[12rem] sm:max-w-xs lg:max-w-lg h-full flex flex-col justify-center space-y-5 items-center">
					<h1 className="font-bold uppercase text-xl md:text-4xl">
						Youth of Integrity
					</h1>

					<p className="text-gray-100 text-xs sm:text-sm sm:leading-[1.2rem] text-center">
						We believe in the next generation because they are the future of the
						church. They congregate weekly to grow their faith and connect with
						students their age to help one another.
					</p>
				</div>
			</div>
		</motion.div>
	);
};
