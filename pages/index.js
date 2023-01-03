import { About } from '../components/About';
import { BibleVerse } from '../components/BibleVerse';
import { Contact } from '../components/Contact';
import { Events } from '../components/Events';
import { Header } from '../components/Header';

function Home() {
	return (
		<div>
			<section id="home">
				<Header />
			</section>

			<section id="about">
				<About />
			</section>

			<BibleVerse />

			<section id="contact">
				<Contact />
			</section>

			<section id="events">
				<Events />
			</section>
		</div>
	);
}

export default Home;
