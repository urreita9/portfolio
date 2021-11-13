import React, { useState } from 'react';
import Video from '../../videos/video.mp4';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
	Button,
} from './HeroElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Francisco Urrea</HeroH1>
				<HeroP>Welcome to my personal Portfolio</HeroP>
				<HeroBtnWrapper>
					<Button
						to='projects'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary={true}
						dark={true}
						smooth={true}
						duration={500}
						spy={true}
						exact={true}
						offset={-80}
					>
						Projects {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
