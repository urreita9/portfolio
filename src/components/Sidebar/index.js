import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavBtnLink } from '../Navbar/NavBarElements';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SideBtn,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
} from './SidebarElements';
const Sidebar = ({ toggle, isOpen }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='projects' onClick={toggle}>
						Projects
					</SidebarLink>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBtn>
						<NavBtnLink
							href='https://github.com/urreita9'
							target='_blank'
							onClick={toggle}
						>
							<FaGithub />
						</NavBtnLink>
					</SideBtn>
					<SideBtn>
						<NavBtnLink
							href='https://www.linkedin.com/in/francisco-urrea/'
							target='_blank'
							onClick={toggle}
						>
							<FaLinkedin />
						</NavBtnLink>
					</SideBtn>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
