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
import { useState } from 'react';
import Map, {
	FullscreenControl,
	GeolocateControl,
	Marker,
	NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Contact = () => {
	const [lng, setLng] = useState(-0.029529);
	const [lat, setLat] = useState(5.694385);

	return (
		<div className="w-full lg:grid lg:grid-cols-6 space-y-10 lg:space-y-0">
			<div className="relative h-full w-full col-span-2">
				<Image
					src={getInTouch}
					alt="Get In Touch"
					className="w-full h-[40vh] sm:h-[44vh] object-cover"
				/>

				<div className="absolute top-0 flex flex-col items-center justify-center h-full w-full">
					<div className="text-center bg-gray-500/50 w-full py-5 text-white font-bold text-2xl">
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="uppercase"
						>
							Contact Us
						</motion.p>
						<h1 className="text-xs sm:text-sm font-normal">
							We will love to hear from you
						</h1>
					</div>
				</div>
			</div>

			<div className="lg:col-span-2 flex flex-col items-center justify-center space-y-10  text-gray-900">
				<div className="space-y-2 font-semibold">
					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<ImLocation className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-400" />
						</span>
						Ghana, Ashaiman - Zenu. Block Factory
					</p>

					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<ImPhone className="w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-amber-400" />
						</span>
						025 713 6081 | 025 718 1311
					</p>

					<p className="flex items-center text-xs sm:text-sm">
						<span>
							<MdAccessTime className="w-5 h-5 mr-1 sm:mr-2 text-amber-400" />
						</span>
						Main Service: Sundays 8:00am - 11:30am
					</p>
				</div>

				<div className="space-y-2">
					<p className="font-bold">Social Media</p>

					<span className="flex space-x-3 sm:space-x-5 text-amber-400">
						<FaFacebook className="w-5 h-5 " />
						<FaTwitter className="w-5 h-5" />
						<FaLinkedin className="w-5 h-5" />
						<FaYoutube className="w-5 h-5" />
						<FaInstagram className="w-5 h-5" />
						<FaPodcast className="w-5 h-5" />
					</span>
				</div>
			</div>

			<div className="lg:col-span-2 h-[40vh] sm:h-[44vh] flex justify-center lg:justify-end">
				<Map
					mapboxAccessToken="pk.eyJ1IjoibnVtb2ZyYW42IiwiYSI6ImNsZGRiZWFqNzAxaHYzdnJzZGsxMG5uankifQ.kKG8lHf3En9AwmENBOVmfQ"
					initialViewState={{
						longitude: lng,
						latitude: lat,
						zoom: 12,
					}}
					style={{ width: '100%' }}
					mapStyle="mapbox://styles/mapbox/streets-v9"
				>
					<Marker longitude={lng} latitude={lat} />
					<NavigationControl position="bottom-right" />
					<FullscreenControl />
					<GeolocateControl />
				</Map>
			</div>
		</div>
	);
};
