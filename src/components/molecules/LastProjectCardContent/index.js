import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

import { Heading, Image } from 'components'

const ContentWrapper = styled.div`
  padding: ${theme('spaces.m')};
`
const HeaderWrapper = styled.div`
  min-height: 4.8rem;
  margin-bottom: ${theme('spaces.m')};
  padding-left: 8rem;
  position: relative;
`
const StyledImage = styled(Image)`
  height: 14.5rem;
  max-width: 100%;
  display: block;
`
const styles = css`
  position: absolute;
  left: 0;
  top: -2.4rem;
  height: 6.4rem;
  width: 6.4rem;
  display: block;
  overflow: hidden;
  border-radius: 6rem;
  border: 3px solid ${theme('colors.white')};

  > img {
    max-width: 100%;
  }
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

const LastProjectCardContent = ({ imageLink, firmImage, firmName, firmJob, title, place }) => (
  <div>
    <StyledImage link={imageLink} />
    <ContentWrapper>
      <HeaderWrapper>
        <StyledFigure>
          <Image link={firmImage} />
        </StyledFigure>
        <StyledName level={5}>{firmName}</StyledName>
        <StyledJob>{firmJob}</StyledJob>
      </HeaderWrapper>
      <StyledHeading level={3}>{title}</StyledHeading>
      <StyledPlace>{place}</StyledPlace>
    </ContentWrapper>
  </div>
)

LastProjectCardContent.propTypes = {
  firmImage: PropTypes.string,
  imageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firmName: PropTypes.string.isRequired,
  firmJob: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
}

export default LastProjectCardContent
