import { Button } from '@mui/material';

export const Donations = () => {
	return (
		<div className="h-[35vh] bg-stone-100 flex justify-center text-center">
			<div className="flex h-full max-w-lg md:max-w-2xl  flex-col items-center justify-center space-y-5">
				<h1 className="font-bold uppercase text-sm sm:text-lg md:text-xl">
					Love God. Love People. Influence the world.
				</h1>

				<h1 className="text-center text-sm max-w-xs sm:max-w-lg">
					It is a privilge to give back to God what He has graciously give. We
					commit to being good stewards of your generosity.
				</h1>

				<button className="sendbtn">Donate</button>
			</div>
		</div>
	);
};
