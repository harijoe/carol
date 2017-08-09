import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import {
  Heading,
  Card,
  Image,
  Divider,
  Icon,
  List,
} from 'components'

const StyledCard = styled(Card)`
  ${breakpoint('xs')`
    width: calc(100vw - 4.8rem);
    margin-left: calc(${theme('spaces.m')} / 2);
    margin-right: calc(${theme('spaces.m')} / 2);
  `}

  ${breakpoint('m')`
    width: 30rem;
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2)
  `}

  width: calc(100vw - 4.8rem);
  height: 100%;
`

const HeaderCard = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme('spaces.m')};
  padding-bottom: calc(${theme('spaces.m')} + 1.4rem);
  height: 12.5rem;
  background-color: ${theme('colors.primary')};

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    padding-bottom: calc(${theme('spaces.l')} + 1.4rem);
  `}
`

const StyledHeading = styled(Heading)`
  position: relative;
  margin-bottom: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.xl')};
  text-transform: lowercase;
  height: 5rem;

  &::first-letter {
    text-transform: uppercase;
  }
`

const ImageWrapper = styled.figure`
  overflow: hidden;

  &::after , & {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &::after {
    background-color: rgba(19, 19, 19, 0.38);
    content: '';
  }
`

const BackgroundImage = styled(Image)`
  width: 100%;
`

const FooterCard = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${theme('spaces.m')};
  padding-top: calc(${theme('spaces.m')} + 1.4rem);

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    padding-top: calc(${theme('spaces.l')} + 2rem);
  `}
`

const FirmImage = styled(Image)`
  position: absolute;
  display: block;
  bottom: -2rem;
  border-radius: 4rem;
  width: 8rem;
  height: 8rem;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
  transition: all 0.3s ease;

  &:first-child {
    margin-left: ${theme('spaces.l')};
    left: 0;
  }
`

const FirmNotationWrapper = styled.div`
  position: absolute;
  display: block;
  bottom: ${theme('spaces.m')};
  width: 80%;
  left: 10%;
  transition: all 0.3s ease;
  text-align: right;
`

const StyledGlobalRating = styled.div`
  color: ${theme('colors.white')};
  text-align: right;
  span {
    font-size: ${theme('fonts.size.xl')};
    font-weight: bold;
  }
`

const StyledRating = styled.div`
  color: ${theme('colors.white')};
  text-align: right;
`

const StyledList = styled(List)`${() => css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${theme('spaces.m')} 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  li { padding: ${theme('spaces.xs')} 0 }
`}`

const StyledCertificateList = styled(List)`${() => css`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${theme('spaces.m')};
  margin-bottom: 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  li {
    padding: ${theme('spaces.s')};
    background-color: ${theme('colors.grey')};
    border-radius: ${theme('spaces.m')};
    font-size: ${theme('fonts.size.xs')};
    text-transform: uppercase;
    margin-right: ${theme('spaces.xs')};
    &:first-child {
      padding: ${theme('spaces.s')};
    }
    &:last-child {
      margin-right: 0;
    }
  }
`}`

const FirmListItem = ({ firm: { name, logoUrl, globalRating, globalRatingCount, firmCertificates }, proPostCode, proPhone, proEmail}) => (
  <StyledCard>
    <HeaderCard>
      <ImageWrapper>
        <BackgroundImage src={cloudinary('/placeholder-firm_image.jpg')} />
      </ImageWrapper>
      <FirmImage alt={'alt'} src={logoUrl || cloudinary('/icons/placeholder-logo.png')} width="50" height="50" />
      <FirmNotationWrapper>
        <StyledGlobalRating><span>{globalRating}</span> / 5</StyledGlobalRating>
        <StyledRating>{globalRatingCount} avis</StyledRating>
      </FirmNotationWrapper>
    </HeaderCard>
    <FooterCard>
      <StyledHeading level={3}>{name}</StyledHeading>
      <StyledList>
        <li><Icon icon="location-pin" /> {proPostCode}</li>
        <li><Icon icon="phone" /> {proPhone}</li>
        <li><Icon icon="mail" /> {proEmail}</li>
      </StyledList>
      <Divider />
      {firmCertificates.length > 0 &&
        <StyledCertificateList>
          {firmCertificates.map(item => (
            <li key={item['@id']}>{item.certificate.name}</li>
          ))}
        </StyledCertificateList>
      }
    </FooterCard>
  </StyledCard>
)

FirmListItem.propTypes = {
  firm: PropTypes.shape({
    name: PropTypes.string,
    logoUrl: PropTypes.string,
    globalRating: PropTypes.number,
    globalRatingCount: PropTypes.number,
    firmCertificates: PropTypes.array,
  }),
  proPostCode: PropTypes.string,
  proPhone: PropTypes.string,
  proEmail: PropTypes.string,
}

export default injectTranslate(FirmListItem)
