import { ImLocation, ImPhone } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
	FaPodcast,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import getInTouch from '../public/assets/getintouch.jpg';
import Image from 'next/image';

export const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0.5 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="w-full grid grid-cols-3 h-[30vh] sm:h-[35vh]"
		>
			<div className="relative h-full w-full">
				<Image
					src={getInTouch}
					alt="Get In Touch"
					className="w-full h-[30vh] sm:h-[35vh] object-cover"
				/>

				<div className="absolute top-0 flex flex-col items-center justify-center h-full w-full">
					<div className="text-center bg-gray-500/50 w-full py-5 text-white font-bold text-lg sm:text-2xl">
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="uppercase"
						>
							Get in Touch
						</motion.p>
						<h1 className="text-xs sm:text-sm font-normal">
							We will love to hear from you
						</h1>
					</div>
				</div>
			</div>

			<div className="p-4 sm:ml-10 sm:p-7 space-y-10 col-span-2 flex flex-col justify-center">
				<div className="text-sm text-gray-700 space-y-2">
					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<ImLocation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-500" />
						</span>
						Ghana, Ashaiman - Zenu. Block Factory
					</p>

					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<ImPhone className="w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-amber-500" />
						</span>
						025 713 6081 | 025 718 1311
					</p>

					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<MdAccessTime className="w-5 h-5 mr-1 sm:mr-2 text-amber-500" />
						</span>
						Service: Sun. 8:00am - 11:30am
					</p>
				</div>

				<div className="flex items-center space-x-2 sm:space-x-5 text-sm">
					<p className="font-bold text-gray-700">Social Media</p>

					<span className="flex space-x-3 sm:space-x-5 text-amber-500">
						<FaFacebook className="w-5 h-5 " />
						<FaTwitter className="w-5 h-5" />
						<FaLinkedin className="w-5 h-5" />
						<FaYoutube className="w-5 h-5" />
						<FaInstagram className="w-5 h-5" />
						<FaPodcast className="w-5 h-5" />
					</span>
				</div>
			</div>
		</motion.div>
	);
};
