import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { Image, Heading, Paragraph, Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme('spaces.m')};
  height: 16rem;
  overflow: hidden;

  ${breakpoint('l')`
    padding: ${theme('spaces.l')};
    height: 20rem;
  `}

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
`
const TopHeaderWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const StyledImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: auto;
  z-index: 0;
`
const NoteFirm = styled.div`
`
const styles = css`
  position: relative;
  height: 6.4rem;
  width: 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center
  overflow: hidden;
  background: ${theme('colors.white')} url(${cloudinaryUrl}icons/default-logo-profil.svg) no-repeat center center;
  background-size: ${theme('icons.size.l')};
  border-radius: 6rem;
  box-shadow: 0 0 1rem rgba(19, 19, 19, 0.15);

  > img {
    max-width: 100%;
  }
`
const StyledHeading = styled(Heading)`
  position: relative;
  z-index: 1;
  margin-bottom: ${theme('spaces.s')};
  margin-top: auto;
  font-size: ${theme('fonts.size.l')};
  text-shadow: 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.38);
  color: ${theme('colors.white')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`
const LogoFirmWrapper = styled.figure`${styles}`

const LogoFirmImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme('spaces.m')};

  ${breakpoint('l')`
    padding: ${theme('spaces.l')};
  `}
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
const formatNotation = value => (
  value.toFixed(`${value}`.split('.')[1] ?
    Math.min(`${value}`.split('.')[1].length, 2) :
    1
  )
)

const FirmLight = ({ imageUrl, logoUrl, globalRating, name, globalRatingCount, postalCode }) => (
  <Wrapper>
    <HeaderWrapper>
      <TopHeaderWrapper>
        <LogoFirmWrapper>
          <LogoFirmImage link={logoUrl} />
        </LogoFirmWrapper>
        <NoteFirm>
          {globalRatingCount ?
            <span>{formatNotation(globalRating)}/5 </span> :
            ''
          }
          {globalRatingCount ?
            <span>{globalRatingCount} <FormattedMessage id="firm.details.reviews" /></span> :
            ''
          }
        </NoteFirm>
      </TopHeaderWrapper>
      <StyledHeading level={3}>
        {name}
      </StyledHeading>
      <StyledImage link={imageUrl} />
    </HeaderWrapper>
    <FooterWrapper>
      <StyledParagraph>
        <StyledIcon icon="location-pin" />{postalCode}
      </StyledParagraph>
    </FooterWrapper>
  </Wrapper>
)

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
  imageUrl: 'http://res.cloudinary.com/quotatis/image/upload/v1495120789/GB/ChatbotImages/Q1/experts-and-advices-before-work.jpg', /* @TODO: To remove when dora will provide it */
}

export default FirmLight
