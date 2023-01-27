import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/dove.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20 bg-stone-100 space-y-5 p-5">
			<h1 className="text-xl text-gray-600 uppercase font-bold tracking-wide sm:tracking-widest">
				WEEKLY PROGRAMS
			</h1>

			<div className="overflow-auto pb-3">
				<div className="flex space-x-5 sm:space-x-14 items-center">
					<ProgramsCard
						serviceName={'Monday Prayers'}
						day="Monday"
						time={'8am - 9am'}
						icon={prayer}
					/>

					<ProgramsCard
						serviceName={'Light Encounter'}
						day="Wednesday"
						time={'7pm - 9pm'}
						icon={cross}
					/>

					<ProgramsCard
						serviceName={'Dominion Encounter'}
						day="Thursday"
						time={'7pm - 8:30pm'}
						icon={dove}
					/>

					<ProgramsCard
						serviceName={'Main Service'}
						day="Sunday"
						time={'8am - 11:30am'}
						icon={church}
					/>
				</div>
			</div>
		</div>
	);
};
