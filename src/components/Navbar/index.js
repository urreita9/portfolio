import React from 'react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
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
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo>fu.</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='projects'>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='about'>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='contact'>Contact</NavLinks>
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
