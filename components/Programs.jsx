import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/dove.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
	return (
		<div className="min-h-[59vh] flex flex-col items-center justify-center  bg-stone-100 space-y-8 p-5">
			<h1 className="text-xl text-gray-600 text-center font-bold tracking-wide sm:tracking-widest uppercase">
				Weekly Programs Schedule
			</h1>

			<div className="flex space-x-5 md:space-x-8 pb-3 overflow-auto max-w-full">
				<ProgramsCard
					serviceName={'Prayers & Counselling'}
					day="Tuesday - Friday"
					time={'10am - 2pm'}
					icon={prayer}
					style={'bg-stone-300'}
				/>

				<ProgramsCard
					serviceName={'Light Encounter'}
					day="Wednesday"
					time={'6pm - 8pm'}
					icon={cross}
					style={'bg-stone-200'}
				/>

				<ProgramsCard
					serviceName={'Dominion Hour'}
					day="Thursday"
					time={'9am - 12pm'}
					icon={dove}
					style={'bg-stone-300'}
				/>

				<ProgramsCard
					serviceName={'Main Service'}
					day="Sunday"
					time={'8am - 11:30am'}
					icon={church}
					style={'bg-stone-200'}
				/>
			</div>
		</div>
	);
};
