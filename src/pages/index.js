import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
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
		</>
	);
};

export default Home;
