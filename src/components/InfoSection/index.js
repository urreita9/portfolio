import React from 'react';
import { Button } from '../ButtonElement';
import { projects } from './Data';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	Img,
	ImgWrap,
	TagsList,
	Tag,
} from './InfoElements';

const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topline,
	lightText,
	headline,
	darkText,
	description,
	buttonLabel1,
	buttonLabel2,
	img,
	alt,
	source,
	visit,
	primary,
	dark,
	tags,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topline}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>{' '}
								<TagsList>
									{tags.map((tag) => (
										<Tag>{tag}</Tag>
									))}
								</TagsList>
								<BtnWrap>
									<Button
										href={visit}
										target='_blank'
										primary={primary}
										dark={dark}
									>
										{buttonLabel1}
									</Button>
									<Button
										href={source}
										target='_blank'
										smooth={true}
										duration={500}
										spy={true}
										exact={true}
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										style={{ marginLeft: '10px' }}
									>
										{buttonLabel2}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
