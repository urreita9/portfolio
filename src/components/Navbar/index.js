import React, { useState, useEffect } from 'react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	BtnContainer,
	NavBtn,
	NavBtnLink,
} from './NavBarElements';

const NavBar = ({ toggle }) => {
	const [scrollNav, setscrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setscrollNav(true);
		} else {
			setscrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo onClick={toggleHome}>fu.</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to='projects'
								smooth={true}
								duration={800}
								spy={true}
								exact='true'
								offset={-80}
							>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='about'
								smooth={true}
								duration={800}
								spy={true}
								exact='true'
								offset={-80}
							>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='contact'
								smooth={true}
								duration={800}
								spy={true}
								exact='true'
								offset={-80}
							>
								Contact
							</NavLinks>
						</NavItem>
					</NavMenu>
					<BtnContainer>
						<NavBtn>
							<NavBtnLink href='https://github.com/urreita9' target='_blank'>
								<FaGithub />
							</NavBtnLink>
						</NavBtn>
						<NavBtn>
							<NavBtnLink
								href='https://www.linkedin.com/in/francisco-urrea/'
								target='_blank'
							>
								<FaLinkedin />
							</NavBtnLink>
						</NavBtn>
					</BtnContainer>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
