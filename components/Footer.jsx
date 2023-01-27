import Link from 'next/link';

export const Footer = () => {
	return (
		<div className="bg-neutral-800 p-5">
			<div className="my-10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-32">
				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="text-neutral-500 uppercase text-xl font-bold">
						Quick Links
					</h2>

					<div className="flex flex-col items-center md:items-start space-y-3 uppercase">
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

				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="text-neutral-500 uppercase text-xl font-bold">
						Policies
					</h2>

					<div className="flex flex-col items-center md:items-start space-y-3">
						<button className="btns uppercase">Privacy Policy</button>
						<button className="btns uppercase">Cookie Policy</button>
						<button className="btns uppercase">Terms and Conditions</button>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="text-neutral-500 uppercase text-xl font-bold">
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
			</div>
		</div>
	);
};
