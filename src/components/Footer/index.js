import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
	IoLogoWhatsapp,
	IoPhonePortraitOutline,
	IoMail,
	IoDocumentText,
} from 'react-icons/io5';

import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItemsWrap,
	FooterLinkItems,
	FooterP,
	FooterLink,
} from './FooterElements';

const Footer = () => {
	return (
		<IconContext.Provider value={{ color: '#01bf71' }}>
			<FooterContainer id='contact'>
				<FooterWrap>
					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItemsWrap>
								<FooterLinkItems>
									<IoLogoWhatsapp />
									<FooterLink href='https://wa.me/5491126435107?text=Hola%20Francisco,%20me%20gustaria%20que%20te%20sumes%20a%20nuestro%20equipo'>
										WhatsApp
									</FooterLink>
								</FooterLinkItems>
								<FooterLinkItems>
									<IoMail />
									<FooterP>francisco.urrea9@gmail.com</FooterP>
								</FooterLinkItems>
							</FooterLinkItemsWrap>
							<FooterLinkItemsWrap>
								<FooterLinkItems>
									<IoPhonePortraitOutline />
									<FooterP>+54911-26435107</FooterP>
								</FooterLinkItems>
								<FooterLinkItems>
									<IoDocumentText />
									<FooterLink
										href='/CVFranciscoUrreaFullstackWeb.pdf'
										target='_blank'
									>
										CV
									</FooterLink>
								</FooterLinkItems>
							</FooterLinkItemsWrap>
						</FooterLinksWrapper>
					</FooterLinksContainer>
				</FooterWrap>
			</FooterContainer>
		</IconContext.Provider>
	);
};

export default Footer;
