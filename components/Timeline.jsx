import React from 'react';
import { TimelineCard } from './TimelineCard';

export const Timeline = () => {
	return (
		<>
			<section>
				<div className="sticky top-0 bg-white py-3 z-10 shadow-sm shadow-white">
					<h2 className="group-date">January</h2>
				</div>

				<div className="bg-gray-100">
					<TimelineCard
						title={'One Member One Soul'}
						date={'Throught The Year'}
					>
						<div className="py-2 font-semibold">
							<h1>Theme: Operation One Member One Soul. Matthew 28:19</h1>
							<p>Venue: Glorious Hill Church Auditorium</p>
						</div>
						<p>
							As part of the church's mission to contribute to the expansion of
							the Kingdom of God on earth, each member of the church is to
							embark on an envagelism mission to win at least one Soul back to
							the church.
						</p>
					</TimelineCard>
				</div>
			</section>

			<section>
				<div className="sticky top-0 bg-white py-3 z-10 shadow-sm shadow-white">
					<h2 className="group-date">February</h2>
				</div>

				<div className="bg-gray-100">
					<TimelineCard title={'7 Days Fasting'} date={'23 - 29 February 2023'}>
						<div className="py-2 font-semibold">
							<h1>
								Theme: SUPERNATURAL EMPOWERMENT FOR THE MANIFESTATION OF
								WONDERS. Luke 41:4 & 37
							</h1>
							<p>Venue: Glorious Hill Church Auditorium</p>
							<p>Speakers: Rev. Nicholas Humphrey Ackumey</p>
							<p>Time: 06-00pm - 08:00pm</p>
						</div>

						<p>
							This 7 days fasting is a spiritual warfare journey aimed to make
							members of the chruch strong in the Spirit to start the year
							right. Join us in this 7 days fasting and prayer for supernatural
							empowerment.
						</p>
					</TimelineCard>
				</div>

				<div>
					<TimelineCard
						title={'Marriage Enrichment Seminar'}
						date={'25 February 2023'}
					>
						<div className="py-2 font-semibold">
							<h1>Theme: THE KINGDOM MARRIAGE. Matthew 19:8</h1>
							<p>Venue: Glorious Hill Church Auditorium</p>
							<p>Speakers: Rev. Nicholas Humphrey Ackumey</p>
							<p>Time: 09:00am</p>
						</div>
						<p>
							This seminar is organized to teach members about the factors that
							make or break a marriage. The seminar's purpose is to keep members
							in the right way of marriage, in God's will. Come and receive
							insights into a prosperous marriage.
						</p>
					</TimelineCard>
				</div>
			</section>

			<section>
				<div className="sticky top-0 bg-white py-3 z-10 shadow-sm shadow-white">
					<h2 className="group-date">March</h2>
				</div>

				<div className="bg-gray-100">
					<TimelineCard title={'Wedding Ceremony'} date={'11 March 2023'}>
						<div className="py-2 font-semibold">
							<h1>Theme: Holy Matrimony between Brother John and Sister Doe</h1>
							<p>Venue: Glorious Hill Church Auditorium</p>
							<p>Time: 09-00am - 03:00pm</p>
						</div>

						<p>
							Brother John and Sister Doe invites all to come and celebrate with
							them as they tie the knot together.
						</p>
					</TimelineCard>
				</div>
			</section>
		</>
	);
};
