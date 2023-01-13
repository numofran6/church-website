import { ProgramsCard } from './ProgramsCard';
import { motion } from 'framer-motion';
import prayer from '../public/assets/prayer.png';
import prayer1 from '../public/assets/prayer1.png';
import prayer2 from '../public/assets/prayer2.png';
import prayer3 from '../public/assets/prayer3.png';

export const Programs = () => {
	return (
		<div className="text-center p-5 flex flex-col items-center justify-center py-12 bg-stone-100">
			<h1 className="text-xl text-gray-600 uppercase font-bold tracking-wide sm:tracking-widest">
				WEEKLY PROGRAMS
			</h1>

			<div className="flex flex-col items-center justify-center">
				<div className="mt-5 flex space-x-5 sm:space-x-14 items-center justify-center">
					<motion.div
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						transition={{ duration: 0.4 }}
					>
						<ProgramsCard
							serviceName={'Monday Prayers'}
							day="Monday"
							time={'8am - 9am'}
							icon={prayer2}
						/>
					</motion.div>

					<motion.div
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<ProgramsCard
							serviceName={'Light Encounter'}
							day="Wednesday"
							time={'7pm - 9pm'}
							icon={prayer}
						/>
					</motion.div>

					<motion.div
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<ProgramsCard
							serviceName={'Dominion Encounter'}
							day="Thursday"
							time={'7pm - 8:30pm'}
							icon={prayer1}
						/>
					</motion.div>

					<motion.div
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						transition={{ duration: 1 }}
					>
						<ProgramsCard
							serviceName={'Main Service'}
							day="Sunday"
							time={'8am - 11:30am'}
							icon={prayer3}
							style="hidden md:block"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
