import React from 'react';
import { TimelineCard } from './TimelineCard';
import { timelineDate } from '../utils/timelineData';

export const Timeline = () => {
	return (
		<>
			{timelineDate.map((event, i) => (
				<section key={i}>
					<div className="sticky top-0 bg-white py-3 z-10 shadow-sm shadow-white">
						<h2 className="group-date">{event.month} </h2>
					</div>

					{event.data.map((eventDetails, i) => (
						<div
							className={eventDetails.alternate ? 'bg-gray-100' : ''}
							key={i}
						>
							<TimelineCard title={eventDetails.title} date={eventDetails.date}>
								<div className="py-2 font-semibold space-y-1">
									{eventDetails.theme && (
										<h1>
											<span className="font-bold">Theme:</span>{' '}
											{eventDetails.theme}
										</h1>
									)}

									{eventDetails.venue && (
										<p>
											<span className="font-bold">Venue:</span>{' '}
											{eventDetails.venue}{' '}
										</p>
									)}

									{eventDetails.speakers && (
										<p>
											<span className="font-bold">Speakers:</span>{' '}
											{eventDetails.speakers}{' '}
										</p>
									)}

									{eventDetails.time && (
										<p>
											<span className="font-bold">Time:</span>{' '}
											{eventDetails.time}{' '}
										</p>
									)}
								</div>

								<p>{eventDetails.description}</p>
							</TimelineCard>
						</div>
					))}
				</section>
			))}
		</>
	);
};
