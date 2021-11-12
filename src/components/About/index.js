import React from 'react';

const AbputSection = () => {
	return (
		<AboutContainer id='about'>
			<AboutH1>About</AboutH1>
			<AboutWrapper>
				<AboutCard>
					<AboutIcon src={icon1} />
					<AboutH2>Techs</AboutH2>
					<AboutP>
						GIT, HTML. Css/Sass. Javascript. React JS. Styled Components.
						<br /> Node JS, Express, Mongo DB, JWT, FireBase.
					</AboutP>
				</AboutCard>
				<AboutCard>
					<AboutIcon src={icon2} />
					<AboutH2>Experience</AboutH2>
					<AboutP>
						Looking for my first real dev experience. I have been studying a lot
						and I hope to be able to apply it in a development team.
					</AboutP>
				</AboutCard>
				<AboutCard>
					<AboutIcon src={icon3} />
					<AboutH2>My objectives</AboutH2>
					<AboutP>
						I will finish the "Soy Henry" bootcamp in April 2022. By May I will
						be joining a great team contributing my acquired knowledge and
						learning from those who have more experience than me. I am convinced
						of that. 2022 will be a great year for me.
					</AboutP>
				</AboutCard>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AbputSection;
