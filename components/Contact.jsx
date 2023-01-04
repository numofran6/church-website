import { ImLocation, ImPhone } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="grid grid-cols-3 w-full"
		>
			<div className="flex flex-col justify-center p-7 font-bold  text-[1rem] leading-[1.5rem] sm:text-xl bg-yellow-200 text-yellow-500 lg:pl-32">
				<p className="animate-pulse">Love God.</p>
				<p className="animate-pulse">Love People.</p>
				<p className="animate-pulse">Influence the World.</p>
			</div>

			<div className="col-span-2 p-4 sm:p-7 space-y-3 bg-green-200">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-[2rem] sm:text-5xl font-bold text-green-600"
				>
					Contact Details
				</motion.h1>
				<div className="text-sm text-green-800 space-y-1 sm:space-y-1.5 sm:ml-5">
					<p className="flex items-center">
						<span>
							<ImLocation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-green-700" />
						</span>
						Ashaiman. Zenu - Block Factory
					</p>
					<p className="flex items-center">
						<span>
							<ImPhone className="w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-green-700" />
						</span>
						025 713 6081 | 025 718 1311
					</p>
					<p className="flex items-center">
						<span>
							<MdAccessTime className="w-5 h-5 mr-1 sm:mr-2 text-green-700" />
						</span>
						Service: Sun. 8:00am - 11:30am
					</p>
				</div>
			</div>
		</motion.div>
	);
};
