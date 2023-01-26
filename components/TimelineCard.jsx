import React from 'react';

export const TimelineCard = ({ date, title, children }) => {
	return (
		<div className="timeline">
			<div className="relative">
				<div className="dot"></div>

				<div className="pl-10">
					<span className="timeline-date">{date} </span>
					<h3 className="timeline-title">{title} </h3>
					<p className="text-gray-500 text-sm">{children}</p>
				</div>
			</div>
		</div>
	);
};
