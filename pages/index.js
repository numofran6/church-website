import Head from 'next/head';
import { About } from '../components/About';
import { BibleVerse } from '../components/BibleVerse';
import { Contact } from '../components/Contact';
import { Events } from '../components/Events';
import { Header } from '../components/Header';
import { motion } from 'framer-motion';

function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<Head>
				<title>Glorious Hill</title>
			</Head>
			<section id="home" className="bg-slate-500">
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
		</motion.div>
	);
}

export default Home;
