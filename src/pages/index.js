import React, { useState } from 'react';
import AbputSection from '../components/About';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { projects } from '../components/InfoSection/Data';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<NavBar toggle={toggle} />

			<HeroSection />
			<div id='projects'>
				{projects.map((project, i) => (
					<InfoSection {...project} key={i} />
				))}
			</div>
			<AbputSection />
		</>
	);
};

export default Home;
