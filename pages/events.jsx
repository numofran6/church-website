import { Layout } from '../components/Layout';
import { Timeline } from '../components/Timeline';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Events = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			end={{ opacity: 0 }}
		>
			<Layout title={'Events'}>
				<div className="h-[25vh] md:h-[30vh] text-white relative">
					<Image
						src={'/assets/women.jpg'}
						alt="Women"
						width={1280}
						height={853}
						className="w-full h-full object-cover"
					/>

					<div className="absolute top-0 bg-gray-800/80 h-full w-full flex flex-col items-center justify-center text-amber-500">
						<h3 className="font-bold uppercase text-xl md:text-3xl tracking-wider">
							Upcoming Events
						</h3>
						<p className="text-sm">
							We have lots of exciting events coming. Visit us.
						</p>
					</div>
				</div>

				<section className="my-5">
					<Timeline />
				</section>
			</Layout>
		</motion.div>
	);
};

export default Events;
