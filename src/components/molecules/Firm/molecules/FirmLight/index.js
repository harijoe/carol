import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { Heading, Paragraph, Icon, ProfileImage } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderWrapper = styled.header`
  ${({ imageUrl }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme('spaces.m')};
  height: 12.5rem;
  background: url(${imageUrl}) no-repeat top center;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: rgba(38, 38, 38, 0.5);
    content: '';
  }

  ${breakpoint('l')`
    padding: ${theme('spaces.l')};
  `}
`};
`

const TopHeaderWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-between;
`

const NoteFirm = styled.div`
  margin: 0;
  text-align: right;
  line-height: 1;
  color: ${theme('colors.white')};

  p {
    margin: 0;
  }

  strong {
    font-weight: bold;
    font-size: ${theme('fonts.size.xxl')};
  }

  span {
    font-size: ${theme('fonts.size.s')};
  }
`

const StyledProfileImage = styled(ProfileImage)`
  height: 8rem;
  width: 8rem;

  ${breakpoint('l')`
    margin-bottom: -3.6rem;
  `}
`

const StyledHeading = styled(Heading)`
  margin-bottom: ${theme('spaces.l')};
  font-size: ${theme('fonts.size.xl')};
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme('spaces.m')};

  ${breakpoint('l')`
    padding: ${theme('spaces.l')};
  `};
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 0;
  color: ${theme('colors.grayscale.dark')};
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
  vertical-align: sub;

  svg {
    fill: ${theme('colors.grayscale.dark')};
  }
`

/**
 * Transforms an int or decimal into format notation
 *
 * ex: 4 => 4.0, 3.555 => 3.56, 4.6 => 4.6
 *
 * @param value
 */
const formatNotation = value => value.toFixed(`${value}`.split('.')[1] ? Math.min(`${value}`.split('.')[1].length, 2) : 1)

const FirmLight = ({ imageUrl, logoUrl, globalRating, name, globalRatingCount, postalCode }) =>
  <Wrapper>
    <HeaderWrapper {...{ imageUrl }}>
      <TopHeaderWrapper>
        <StyledProfileImage imageLink={logoUrl} />
        <NoteFirm>
          {globalRatingCount
            ? <p>
                <strong>{formatNotation(globalRating)}</strong>/5{' '}
              </p>
            : ''}
          {globalRatingCount
            ? <span>
                {globalRatingCount} <FormattedMessage id="firm.details.reviews" />
              </span>
            : ''}
        </NoteFirm>
      </TopHeaderWrapper>
    </HeaderWrapper>
    <FooterWrapper>
      <StyledHeading level={3}>
        {name}
      </StyledHeading>
      <StyledParagraph>
        <StyledIcon icon="location-pin" />
        {postalCode}
      </StyledParagraph>
    </FooterWrapper>
  </Wrapper>

FirmLight.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  logoUrl: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  globalRating: PropTypes.number,
  globalRatingCount: PropTypes.number,
}

FirmLight.defaultProps = {
  globalRating: null,
  globalRatingCount: null,
  imageUrl:
    'https://res.cloudinary.com/quotatis/image/upload/v1495120789/GB/ChatbotImages/Q1/experts-and-advices-before-work.jpg' /* @TODO: To remove when dora will provide it */,
}

export default FirmLight
