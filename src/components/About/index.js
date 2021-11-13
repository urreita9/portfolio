import React from 'react';

import {
	AboutContainer,
	AboutH1,
	AboutWrapper,
	AboutCard,
	AboutIcon,
	AboutH2,
	AboutP,
} from './AboutElements';

const AboutSection = () => {
	return (
		<AboutContainer id='about'>
			<AboutH1>About</AboutH1>
			<AboutWrapper>
				<AboutCard>
					<AboutIcon src='./images/svg-1.svg' />
					<AboutH2>Techs</AboutH2>
					<AboutP>
						GIT, HTML. Css/Sass. Javascript. React JS. Styled Components.
						<br /> Node JS, Express, Mongo DB, JWT, FireBase.
					</AboutP>
				</AboutCard>
				<AboutCard>
					<AboutIcon src='./images/svg-2.svg' />
					<AboutH2>Experience</AboutH2>
					<AboutP>
						Looking for my first real dev experience. I have been studying a lot
						and I hope to be able to apply it in a development team.
					</AboutP>
				</AboutCard>
				<AboutCard>
					<AboutIcon src='./images/svg-3.svg' />
					<AboutH2>My objectives</AboutH2>
					<AboutP>
						Joining a great team contributing my acquired knowledge and learning
						from those who have more experience than me. 2022 will be a great
						year for me. Im convinced of that.
					</AboutP>
				</AboutCard>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;
