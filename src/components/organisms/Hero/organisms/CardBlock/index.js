import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Card, ThumbnailPoster, Link, List } from 'components'

import { theme } from 'utils/style'

const Wrapper = styled(Link)`
	display: block;
	width: 11.2rem;
`

const CardContent = styled.div`
	position: relative;
	padding: ${theme('spaces.s')};
	font-size: ${theme('fonts.size.s')};
	line-height: 1;
`

const StyledIcon = styled.span`
	position: absolute;
	top: -1.1rem;
	right: ${theme('spaces.s')};
	display: block;
	height: 2.2rem;
	width: 2.2rem;
	border-radius: 6rem;
	border: 2px solid ${theme('colors.white')};
	background-color: ${theme('colors.white')};
	z-index: 1;
`

const StyledList = styled(List)`
	margin: 0;
	padding: 0;
	list-style: none;

	li{
		padding-top: ${theme('spaces.s')};
	}
`

const StyledParagraph = styled.p`
	margin: ${theme('spaces.s')} 0 0 0;
	color: ${theme('colors.primary')};
`

const CardBlock = ({ link }) => (
	<Wrapper to={link}>
		<Card>
			<ThumbnailPoster />
			<CardContent>
				<StyledIcon />
				<StyledList>
					<li>Item 1</li>
					<li>Item 2</li>
				</StyledList>
				<StyledParagraph>
					Allons-y
				</StyledParagraph>
			</CardContent>
		</Card>
	</Wrapper>
)

CardBlock.propTypes = {
  link: PropTypes.string.isRequired,
}

export default CardBlock
