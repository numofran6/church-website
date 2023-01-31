import Head from 'next/head';
import { About } from '../components/About';
import { BibleVerse } from '../components/BibleVerse';
import { Contact } from '../components/Contact';
import { Programs } from '../components/Programs';
import { Header } from '../components/Header';
import { AboutPastor } from '../components/AboutPastor';
import { Kids } from '../components/Kids';
import { Youth } from '../components/Youth';
import { Donations } from '../components/Donations';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
// import dynamic from 'next/dynamic';

function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			end={{ opacity: 0 }}
		>
			<Head>
				<title>Glorious Hill</title>
			</Head>

			<motion.section id="home" className="bg-yellow-800">
				<Header />
			</motion.section>

			<section>
				<BibleVerse />
			</section>

			<section id="about">
				<About />
			</section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<AboutPastor />
			</motion.section>

			<section>
				<Programs />
			</section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Kids />
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
			>
				<Youth />
			</motion.section>

			<section>
				<Donations />
			</section>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.7 }}
				id="contact"
			>
				<Contact />
			</motion.section>

			<footer>
				<Footer />
			</footer>
		</motion.div>
	);
}

export default Home;

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
