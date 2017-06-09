import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import getImageURL from 'utils/wpImage'

import { Heading, Image } from 'components'

const Wrapper = styled.div`
  ${breakpoint('m')`
    width: 100%;
    min-width: 30rem;
  `}
`

const CardHeader = styled.header`
  height: 14.5rem;
  display: block;
  overflow: hidden;

  ${breakpoint('m')`
    height: 20rem;
  `}
`

const ContentWrapper = styled.div`
  padding: ${theme('spaces.m')};

  ${breakpoint('m')`
    padding: ${theme('spaces.m')} ${theme('spaces.l')} ${theme('spaces.l')} ${theme('spaces.l')};
  `}
`
const FirmHeader = styled.div`
  min-height: 4.8rem;
  margin-bottom: ${theme('spaces.m')};
  padding-left: 8rem;
  position: relative;

  ${breakpoint('m')`
    padding-left: 9.1rem;
  `}
`
const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
const styles = css`
  position: absolute;
  left: 0;
  top: -2.4rem;
  height: 6.4rem;
  width: 6.4rem;
  display: block;
  overflow: hidden;
  background-color: ${theme('colors.white')};
  border-radius: 6rem;
  border: 3px solid ${theme('colors.white')};

  > img {
    width: auto;
    height: 100%;
  }

  ${breakpoint('m')`
    top: -3.75rem;
    height: 7.5rem;
    width: 7.5rem;
  `}  
`
const StyledFigure = styled.figure`${styles}`

const StyledName = styled(Heading)`
  color: ${theme('colors.black')};
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.l')};
  margin-bottom: 0;
`
const StyledHeading = styled(Heading)`
  margin-bottom: ${theme('spaces.s')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`
const StyledJob = styled.strong`
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.s')};
  font-weight: normal;
  color: ${theme('colors.primary')};
`
const StyledPlace = styled.address`
  font-size: ${theme('fonts.size.s')};
  color: ${theme('colors.grayscale.medium')};
  display: block;
`

const LastProjectCardContent = ({ image, firmImage, firmName, firmTrade, title, place }) => {
  // @TODO: image is expected to be an object in a next backend update, this is a momentary polyfill
  const firmImageObject = firmImage instanceof Object ? firmImage : { src: firmImage }

  firmImageObject.src = getImageURL(firmImageObject.src, '300x300')

  return (
    <Wrapper>
      <CardHeader>
        <StyledImage src={image} />
      </CardHeader>
      <ContentWrapper>
        <FirmHeader>
          <StyledFigure>
            <Image {...firmImageObject} />
          </StyledFigure>
          <StyledName level={5}>{firmName}</StyledName>
          <StyledJob>{firmTrade}</StyledJob>
        </FirmHeader>
        <StyledHeading level={3}>{title}</StyledHeading>
        <StyledPlace>{place}</StyledPlace>
      </ContentWrapper>
    </Wrapper>
  )
}

LastProjectCardContent.propTypes = {
  firmImage: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firmName: PropTypes.string.isRequired,
  firmTrade: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
}

export default LastProjectCardContent
