import { ProgramsCard } from './ProgramsCard';
import prayer from '../public/assets/prayer.png';
import prayer1 from '../public/assets/prayer1.png';
import prayer2 from '../public/assets/prayer2.png';
import prayer3 from '../public/assets/prayer3.png';

export const Programs = () => {
	return (
		<div className="flex flex-col items-center justify-center py-12 bg-stone-100 space-y-5 p-5">
			<h1 className="text-xl text-gray-600 uppercase font-bold tracking-wide sm:tracking-widest">
				WEEKLY PROGRAMS
			</h1>

			<div className="overflow-auto pb-3">
				<div className="flex space-x-5 sm:space-x-14 items-center">
					<ProgramsCard
						serviceName={'Monday Prayers'}
						day="Monday"
						time={'8am - 9am'}
						icon={prayer2}
					/>

					<ProgramsCard
						serviceName={'Light Encounter'}
						day="Wednesday"
						time={'7pm - 9pm'}
						icon={prayer}
					/>

					<ProgramsCard
						serviceName={'Dominion Encounter'}
						day="Thursday"
						time={'7pm - 8:30pm'}
						icon={prayer1}
					/>

					<ProgramsCard
						serviceName={'Main Service'}
						day="Sunday"
						time={'8am - 11:30am'}
						icon={prayer3}
					/>
				</div>
			</div>
		</div>
	);
};
