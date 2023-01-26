import Link from 'next/link';
import { useState } from 'react';
import Map, {
	FullscreenControl,
	GeolocateControl,
	Marker,
	NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Footer = () => {
	const [lng, setLng] = useState(-0.029529);
	const [lat, setLat] = useState(5.694385);

	return (
		<div className="bg-neutral-800 p-7">
			<div className="my-10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-32">
				<div className="flex flex-col items-center md:items-start space-y-4">
					<h2 className="text-gray-300 uppercase text-2xl font-bold">
						Quick Links
					</h2>

					<div className="flex flex-col items-center md:items-start space-y-4 uppercase">
						<Link href={'/#home'} className="btns">
							Home
						</Link>
						<Link href={'events'} className="btns">
							Events
						</Link>
						<Link href={'/#about'} className="btns">
							About
						</Link>
						<Link href={'/#contact'} className="btns">
							Contact
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start space-y-4">
					<h2 className="text-gray-300 uppercase text-2xl font-bold">
						Get in touch
					</h2>

					<div className="flex flex-col space-y-2 uppercase">
						<input type="text" placeholder="Name" className="textfield" />
						<input
							type="text"
							placeholder="Phone/ Email"
							className="textfield"
						/>
						<textarea
							type="text"
							placeholder="Leave us a message"
							rows={5}
							className="textfield"
						></textarea>
						<button className="sendbtn">Send</button>
					</div>
				</div>

				<div>
					<Map
						mapboxAccessToken="pk.eyJ1IjoibnVtb2ZyYW42IiwiYSI6ImNsZGRiZWFqNzAxaHYzdnJzZGsxMG5uankifQ.kKG8lHf3En9AwmENBOVmfQ"
						initialViewState={{
							longitude: lng,
							latitude: lat,
							zoom: 12,
						}}
						style={{ width: 300, height: 330, borderRadius: '15px' }}
						mapStyle="mapbox://styles/mapbox/streets-v9"
					>
						<Marker longitude={lng} latitude={lat} />
						<NavigationControl position="bottom-right" />
						<FullscreenControl />
						<GeolocateControl />
					</Map>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center space-y-2 ">
				<p className="text-xs sm:text-sm text-gray-300">
					Be the goodness in the world!
				</p>
			</div>
		</div>
	);
};
