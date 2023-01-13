import { Button } from '@mui/material';
import Image from 'next/image';
import pastor from '../public/assets/pastor1.jpg';

export const AboutPastor = () => {
	return (
		<div className="h-[40vh] relative bg-stone-800 text-white">
			<Image src={pastor} alt="" className="h-[40vh] w-[100vw] object-cover" />

			<div className="absolute top-0 h-full w-full text-center">
				<div className="ml-5 sm:ml-10 lg:ml-28 max-w-[12rem] sm:max-w-xs lg:max-w-lg h-full flex flex-col justify-center space-y-5 items-center">
					<h1 className="font-bold uppercase text-lg sm:text-xl md:text-2xl">
						Meet our Reverend
					</h1>

					<p className="text-gray-200 text-sm md:text-md">
						Rev. Nicholas Humphrey Ackumey
					</p>

					<p className="text-gray-200 text-xs sm:text-md text-center">
						Fueled by prayer and a zealous love for God, Rev. Nicholas is
						passionate about building the local church and advancing God&apos;s
						kingdom on the earth
					</p>

					<Button
						variant="contained"
						sx={{ width: 'fit-content', fontWeight: 'bold' }}
						size="small"
					>
						FOLLOW REV. NICHOLAS
					</Button>
				</div>
			</div>
		</div>
	);
};
