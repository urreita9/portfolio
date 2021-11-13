import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #101522;
`;

export const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItemsWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const FooterLinkItems = styled.div`
	display: flex;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 225px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLink = styled.a`
	text-decoration: none;
	color: #fff;
	margin-bottom: 0.5rem;
	font-size: 14px;
	margin-left: 10px;
	&:hover {
		color: #01bf71;
		transition: 0.3s ease-out;
	}
`;

export const FooterP = styled.p`
	color: #fff;
	margin-bottom: 0.5rem;
	font-size: 14px;
	margin-left: 10px;
`;
