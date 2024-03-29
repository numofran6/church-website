import Image from 'next/image';
import kids from '../public/assets/kids.jpg';

export const Kids = () => {
	return (
		<div className="min-h-[35vh] sm:min-h-[40vh] relative text-white">
			<Image
				src={kids}
				alt=""
				className="h-[35vh] sm:h-[40vh] w-[100vw] object-cover"
			/>

			<div className="absolute top-0 bg-orange-700/70 h-full w-full">
				<div className="max-w-[12rem] sm:max-w-xs lg:max-w-lg ml-5 sm:ml-10 lg:ml-28 h-full flex flex-col justify-center space-y-5 items-center">
					<h1 className="font-bold uppercase text-xl md:text-4xl">kids</h1>

					<p className="text-gray-100 text-sm text-center">
						We love kids! We have Pastors who are richly educated in the Word of
						God and who teach kids from the age of 5 - 15 about the wonderful
						word of God.
					</p>
				</div>
			</div>
		</div>
	);
};
