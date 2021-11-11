import React from 'react';
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
} from './HeroElements';

const HeroSection = () => {
	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Francisco Urrea</HeroH1>
				<HeroP>Welcome to my personal Portfolio</HeroP>
				<HeroBtnWrapper>
					{/* <Button to='projects'>
						Projects {hover ? <ArrowForward /> : <ArrowRight />}
					</Button> */}
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
