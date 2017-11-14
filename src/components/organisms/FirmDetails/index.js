/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { scroller } from 'react-scroll'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import transformDate from 'utils/transformDate'
import isTouchDevice from 'utils/isTouchDevice'
import normalizeUrl from 'utils/normalizeUrl'
import ReactTooltip from 'react-tooltip'
import { locales } from 'config'
import {
  List,
  Section,
  Grid,
  Row,
  Heading,
  Divider,
  Paragraph,
  Icon,
  IconLink,
  CloseAllButton,
  Col,
  ReadMore,
  ProfileImage,
  StarRating,
} from 'components'
import GoogleMapsInterventionArea from './atoms/GoogleMapsInterventionArea'
import FirmCertificate from './molecules/FirmCertificate'
import FirmGallery from './molecules/FirmGallery'
import TeamGallery from './molecules/TeamGallery'
import RatingReviews from './organisms/RatingReviews'

const Wrapper = styled.div`
  section:first-child {
    ${breakpointMax('m')`
      padding-top: 0;
    `};
  }

  section:last-child {
    padding-bottom: ${theme('spaces.xl')};

    ${breakpoint('m')`
      padding-bottom: ${theme('spaces.xxl')};
    `};

    ${breakpoint('xl')`
      padding-bottom: ${theme('spaces.xxxl')};
    `};
  }

`

const StyledRow = styled(Row)`
  ${breakpointMax('m')`
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    padding-left: ${theme('spaces.m')};
    padding-right: ${theme('spaces.m')};
  `};

  ${breakpoint('m')`
    position: relative;
    margin-left: 0;
    margin-right: 0;
  `};
`
const WrapperImagePro = styled(Col)`
  padding: 0;
  height: 25rem;
  overflow: hidden;

  ${breakpoint('m')`
    height: 55rem;
  `};

  ${breakpointMax('m')`
    position: relative;
    flex-basis: 100vw;
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    max-width: 100vw;
    width: 100vw;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(19,19,19,0.3);
      content: '';
    }
  `};

  > a {
    position: absolute;
    top: -32px;
    z-index: 2;
    color: ${theme('colors.grayscale.dark')};

    ${breakpointMax('m')`
      left: ${theme('spaces.m')};
      top: 5rem;
      color: ${theme('colors.white')};
    `};
  }
`

const WrapperInfosPro = styled(Col)`
  display: flex;
  flex-wrap: wrap;
  padding-right: 0;
  padding-left: 0;
  margin-top: ${theme('spaces.l')};
  height: fit-content;

  ${breakpointMax('m')`
    position: relative;
  `};

  ${breakpoint('m')`
    padding-left: ${theme('spaces.l')};
  `};

  ${breakpoint('xl')`
    padding-left: ${theme('spaces.xxl')};
  `};

  > p {
    margin-top: ${theme('spaces.l')};
  }
`

const InfosPro = styled.div`
  flex-direction: column;
  margin-top: ${theme('spaces.m')};
  width: 100%;

  ${breakpoint('m')`
    margin-top: 0;
    width: calc(100% - 10rem);
  `};
  ${breakpoint('xl')`
    width: calc(100% - 13rem);
  `};

  > h1 {
    text-transform: lowercase;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

const LogoProImage = styled(ProfileImage)`
  position: absolute;
  top: 18.5rem;
  right: ${theme('spaces.m')};
  width: 10rem;
  height: 10rem;
  border-radius: 6.25rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  ${breakpoint('s')`
    position: absolute;
    top: 25rem;
    right: ${theme('spaces.m')};
    width: 10rem;
    height: 10rem;
    border-radius: 6.25rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  `};
  ${breakpoint('m')`
    top: 0;
    right: 0;
    width: 10rem;
    height: 10rem;
    border-radius: 6.25rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  `};

  ${breakpointMax('m')`
    top: -10rem;
    right: auto;
  `};

  ${breakpoint('xl')`
    width: 12.5rem;
    height: 12.5rem;
  `};
`

const Notation = styled.div`
  margin-top: ${theme('spaces.s')};
  color: ${theme('colors.grayscale.dark')};
`
const StyledIconLink = styled(IconLink)`
  transition: all 0.2s ease;
  display: block;
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.grayscale.dark')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
  `}

  ${breakpointMax('m')`
    span:first-child path{
      fill: ${theme('colors.white')};
    }
  `} 

  span {
    vertical-align: top;

    &:first-child {
      margin-right: ${theme('spaces.m')};
      height: 9px;
      width: 23px;
    }
  }

  &:hover {
    color: ${theme('colors.secondary')};

    path {
      fill: ${theme('colors.secondary')};
    }
  }
`

const StyledCertificateList = styled(List)`
  list-style-type: none;
  vertical-align: middle;
  color: ${theme('colors.grayscale.dark')};

  ${breakpointMax('m')`
    strong {
      display: block;
      margin-bottom: ${theme('spaces.s')};
    }
  `};
`

const WrapperContactsPro = styled.div`
  width: 100%;
  color: ${theme('colors.grayscale.dark')};
`
const StyledContactList = styled(List)`
  display: inline-block;
  vertical-align: top;
  padding: ${theme('spaces.l')} 0;
  list-style-type: none;
  color: ${theme('colors.grayscale.dark')};

  &:first-child {
    width: 60%;
    ${breakpointMax('s')`
      padding-bottom: 0;
      width: 100%;
    `};
  }

  &:last-child {
    width: 40%;
    ${breakpointMax('s')`
      padding-top: 0;
      width: 100%;
    `};
  }

  li {
    padding-top: ${theme('spaces.s')};

    span {
      margin-right: ${theme('spaces.s')};
    }
  }
`

const StyledInformationRow = styled(Row)`
  ${breakpoint('m')`
    justify-content: center;
  `};
`

const InformationBlock = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
  }

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.m')};
    margin-right: auto;
    margin-left: auto;
  `};
`

const StyledInformationIcon = styled(Icon)`
  margin-bottom: ${theme('spaces.m')};
  height: 3rem;
  width: auto;
`

const MapWrapper = styled.div`
  position: relative;
  height: 34rem;
  width: 100%;

  ${breakpointMax('s')`
    margin-bottom: 34rem;
  `};
`

const StyledGrid = styled(Grid)`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: ${theme('spaces.xxl')} auto ${theme('spaces.xxxl')} auto;
  max-width: 95rem;

  ${breakpointMax('l')`
    width: 100%;
  `};
`

const MapStyledGrid = styled(StyledGrid)`
  margin: 0 auto;
`

const StyledTeamSection = styled(Section)`
  padding-bottom: ${theme('spaces.xxl')};
`
const WebsiteLink = styled.a`
  color: ${theme('colors.primary')};
  text-decoration: none;
  font-size: ${theme('fonts.size.s')};
`

const AvisLink = styled.a`
  color: ${theme('colors.primary')};
  text-decoration: none;
  margin-left: 10px;
`

const StyledOverlayModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
  z-index: 99;
  pointer-events: auto;
`

const StyledModal = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  max-height: calc(100% - 40px);
  background-color: #fff;
  z-index: 101;
  overflow: scroll;
`

const StyledContentModal = styled.div`
  padding: ${theme('spaces.xxl')} ${theme('spaces.m')} 0 ${theme('spaces.m')};
`

const StyledReactTooltip = styled(ReactTooltip)`
  max-width: 30rem;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
`

const StyledDescription = styled.div`
  width: 100%;
  margin: ${theme('spaces.m')} 0 0 0;
`

const StyledCoverPro = styled.div`
  ${({ imageUrl }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${imageUrl});
    background-size: cover;

    ${breakpoint('s')`
    height: 100%;
    background-size: 100%;
    background-position: center center;
  `};

    ${breakpoint('m')`
    height: 54rem; 
    background-size: cover;
  `};
  `};
`

const StyledMoreInfoSection = Section

const StyledMapSection = styled(Section)`
  position: relative;
  
  ${breakpointMax('s')`
    padding: 0;
  `};
  
  &::before {
    position: absolute;
    content: '';
    background: ${theme('colors.grayscale.lightest')}; 
    top: 0;
    left: 0;
    bottom: 50%;
    right: 0;
  }
`

class FirmDetails extends Component {
  static propTypes = {
    translate: PropTypes.func.isRequired,
    labelWithColon: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    mapEnabled: PropTypes.bool.isRequired,
    teamEnabled: PropTypes.bool.isRequired,
    reviewsEnabled: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      projectId: PropTypes.string,
    }),
    details: PropTypes.shape({
      name: PropTypes.string,
      logoUrl: PropTypes.string,
      postalCode: PropTypes.string,
      city: PropTypes.string,
      countryCode: PropTypes.string,
      registrationNumber: PropTypes.string,
      description: PropTypes.string,
      websiteUrl: PropTypes.string,
      employeesNumber: PropTypes.string,
      clientSince: PropTypes.string,
      creationDate: PropTypes.string,
      certificates: PropTypes.array,
      globalRating: PropTypes.number,
      globalRatingCount: PropTypes.number,
      contractZone: PropTypes.shape({
        postalCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
      firmCertificates: PropTypes.array,
      firmPictures: PropTypes.array,
      trade: PropTypes.string,
      leadSales: PropTypes.array,
      reviews: PropTypes.array,
    }),
  }

  constructor() {
    super()
    this.state = { modalIsVisible: false, contentModal: null }
  }

  showModal = description => {
    if (!isTouchDevice()) return
    this.setState({ contentModal: description, modalIsVisible: true })
  }

  hideModal = () => {
    this.setState({ modalIsVisible: false })
  }

  scrollToRatings = () => {
    scroller.scrollTo('reviews', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  render() {
    const { modalIsVisible, contentModal } = this.state

    const { details, locale, translate, labelWithColon, mapEnabled, teamEnabled, reviewsEnabled, params: { projectId } } = this.props

    const {
      logoUrl,
      name,
      registrationNumber,
      description,
      websiteUrl,
      employeesNumber,
      clientSince,
      creationDate,
      firmPictures,
      firmCertificates,
      globalRating,
      globalRatingCount,
      leadSales,
      contractZone: { postalCodes },
      trade,
      reviews,
    } = details

    const projectFinder = ({ project: { '@id': id } }) => id === `/projects/${projectId}`
    const { proEmail, proPhone, proPostCity, proPostCode } = leadSales.find(projectFinder)

    let mainPicture = null
    let teamPictures = null
    let pictures = null

    if (firmPictures) {
      const mainPictureObj = firmPictures.filter(picture => picture.main)[0]
      if (mainPictureObj && mainPictureObj.url) mainPicture = mainPictureObj.url
      teamPictures = firmPictures.filter(picture => picture.tag === 'team')
      pictures = firmPictures.filter(picture => picture.tag !== 'team' && !picture.main)
    }

    const genericFirmDetailImage = locales[locale].genericFirmDetailImage

    const certificatesAvailable = firmCertificates && firmCertificates.length > 0

    // Only for React Truncate, preserve newlines from plain text
    // https://github.com/One-com/react-truncate
    const renderDescription = desc => desc.split('\n').map((line, i, arr) => {
        const l = <span key={i}>{line}</span>
        if (i === arr.length - 1) return l
        return [l, <br key={`${i}br`} />]
      })

    const coverProImage = mainPicture || genericFirmDetailImage

    return (
      <Wrapper>
        <Section>
          <StyledRow>
            <WrapperImagePro xs={12} m={5}>
              <StyledIconLink to={`projects/${projectId}`} icon="back_arrow">
                <FormattedMessage id="firm.details.back_link_title" />
              </StyledIconLink>
              <StyledCoverPro imageUrl={coverProImage} />
            </WrapperImagePro>
            <WrapperInfosPro xs={12} m={7}>
              <InfosPro>
                <Heading level={1}>{name}</Heading>
                <Paragraph>{trade}</Paragraph>
                <Notation>
                  {globalRatingCount > 0 ? (
                    <div>
                      <StarRating value={globalRating} />
                      <strong> {globalRating}</strong> - {globalRatingCount} <FormattedMessage id="firm.details.rating_reviews" />
                      {reviewsEnabled && (
                        <AvisLink name="myScrollToElement" onClick={this.scrollToRatings}>
                          {translate('firm.details.see_reviews')}
                        </AvisLink>
                      )}
                    </div>
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </Notation>
              </InfosPro>
              {logoUrl &&
                  <LogoProImage image={logoUrl} size={'l'} />}
              {firmCertificates && firmCertificates.length > 0 && (
                <StyledCertificateList>
                  <strong>{labelWithColon(translate('firm.details.certifications'))}</strong>
                  {firmCertificates.map(({ ['@id']: id, certificate }) =>
                    <FirmCertificate key={id} {...certificate} showModal={this.showModal} />
                  )}
                </StyledCertificateList>
              )}
              <Divider />
              <WrapperContactsPro>
                <StyledContactList>
                  <li>
                    <Icon icon="location-pin" />
                    {proPostCode} {proPostCity}
                  </li>
                  <li>
                    <Icon icon="phone" /><a href={`tel:${proPhone}`}>{proPhone}</a>
                  </li>
                  <li>
                    <Icon icon="mail" /><a href={`mailto:${proEmail}`}>{proEmail}</a>
                  </li>
                </StyledContactList>
                {websiteUrl && <StyledContactList>
                  <li>
                    <WebsiteLink href={normalizeUrl(websiteUrl)} rel="nofollow" target="_blank">
                      <FormattedMessage id="firm.details.website" />
                    </WebsiteLink>
                  </li>
                </StyledContactList>}
              </WrapperContactsPro>
              <Divider />
              {description && (<StyledDescription>
                <ReadMore lines={7} more={translate('firm.details.see_more')} less={translate('firm.details.see_less')}>
                  {renderDescription(description)}
                </ReadMore>
              </StyledDescription>
            )}</WrapperInfosPro>
          </StyledRow>
        </Section>
          <StyledMoreInfoSection title={translate('firm.details.more_information')} light>
            <Grid>
              <StyledInformationRow>
                {registrationNumber && (
                  <InformationBlock xs={12} s={4} m={3}>
                    <StyledInformationIcon icon="firm-details_registration-number" />
                    <span>{labelWithColon(translate('firm.details.registration_number'))}</span>
                    {registrationNumber}
                  </InformationBlock>
                )}
                {employeesNumber && parseFloat(employeesNumber) !== 0 && (
                  <InformationBlock xs={12} s={4} m={3}>
                    <StyledInformationIcon icon="firm-details_employees-number" />
                    <span>{labelWithColon(translate('firm.details.employees_number'))}</span>
                    {employeesNumber}
                  </InformationBlock>
                )}
                {clientSince && (
                  <InformationBlock xs={12} s={4} m={3}>
                    <StyledInformationIcon icon="firm-details_client-since" />
                    <span>{labelWithColon(translate('firm.details.client_since'))}</span>
                    {transformDate(clientSince)}
                  </InformationBlock>
                )}
                {creationDate && (
                  <InformationBlock xs={12} s={4} m={3}>
                    <StyledInformationIcon icon="firm-details_exist-since" />
                    <span>{labelWithColon(translate('firm.details.exist_since'))}</span>
                    {transformDate(creationDate)}
                  </InformationBlock>
                )}
              </StyledInformationRow>
            </Grid>
          </StyledMoreInfoSection>
          {mapEnabled && (
            <StyledMapSection>
              <MapStyledGrid>
                <MapWrapper>
                  <GoogleMapsInterventionArea postCodes={postalCodes} />
                </MapWrapper>
              </MapStyledGrid>
            </StyledMapSection>
          )}
          {teamEnabled && teamPictures && teamPictures.length > 0 && (
            <StyledTeamSection>
              <TeamGallery pictures={teamPictures} />
            </StyledTeamSection>
          )}
          { pictures && pictures.length > 0 && (
            <Section title={translate('firm.details.last_projects')}>
              <FirmGallery pictures={pictures} />
            </Section>
          )}
          {!isTouchDevice() && certificatesAvailable && <StyledReactTooltip type={'light'} effect={'solid'} place={'bottom'} />}
          {isTouchDevice() &&
            certificatesAvailable &&
            modalIsVisible && (
              <StyledOverlayModal onClick={this.hideModal}>
                <StyledModal>
                  <CloseAllButton closeAll={this.hideModal} />
                  <StyledContentModal>{contentModal}</StyledContentModal>
                </StyledModal>
              </StyledOverlayModal>
            )}
            {reviewsEnabled && reviews.length > 0 && (
              <div>
                <a name="reviews" id="reviews" />
                <RatingReviews coverProImage={coverProImage} firmDetails={details} />
              </div>
            )}
        </Wrapper>

    )
  }
}

export default injectTranslate(FirmDetails)
