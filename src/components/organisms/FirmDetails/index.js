/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import transformDate from 'utils/transformDate'
import transformThumbnailUrl from 'utils/transformThumbnailUrl'
import isTouchDevice from 'utils/isTouchDevice'
import normalizeUrl from 'utils/normalizeUrl'
import ReactTooltip from 'react-tooltip'
import { locales } from 'config'

import {
  Image,
  List,
  Section,
  Grid,
  Row,
  Heading,
  Divider,
  Paragraph,
  Icon,
  IconLink,
  BorderBox,
  Loading,
  CloseAllButton,
  Col,
  ReadMore,
  ProfileImage,
} from 'components'

const Wrapper = styled.div``

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin-left: 0;
    margin-right: 0;
  `};
`
const WrapperImagePro = styled(Col)`
  padding: 0;
  height: 25rem;
  overflow: hidden;

  ${breakpoint('s')`
    height: 30rem;
  `};
  ${breakpoint('m')`
    height: 55rem;
  `};

  > a {
    position: absolute;
    top: -32px;
    color: ${theme('colors.grayscale.dark')};

    ${breakpointMax('m')`
      right: 0;
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
  padding-right: ${theme('spaces.l')};
  margin-top: ${theme('spaces.m')};
  width: 100%;

  ${breakpoint('s')`
    width: calc( 100% - 10rem );
  `};
  ${breakpoint('l')`
    width: calc( 100% - 10rem );
  `};
  ${breakpoint('xl')`
    width: 46.5rem;
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
  background-color: #f6f6f6;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  ${breakpoint('s')`
    position: absolute;
    top: 25rem;
    right: ${theme('spaces.m')};
    width: 10rem;
    height: 10rem;
    border-radius: 6.25rem;
    background-color: #f6f6f6;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  `};
  ${breakpoint('m')`
    position: relative;
    top: -${theme('spaces.m')};
    width: 10rem;
    height: 10rem;
    border-radius: 6.25rem;
    background-color: #f6f6f6;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    overflow: hidden;
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
const Star = styled(Icon)`
  margin-right: ${theme('spaces.xs')};

  .empty_star {
    display: none;
  }
`

const IconCertificate = styled(Icon)`
  display: none;

  ${breakpointMax('m')`
    display: block;
    position: absolute;
    right: 4px;
    top: 50%;
    margin-top: -0.55rem;
    height: 1.1rem;
    width: 1.1rem;
  `};
`

const StyledCertificateList = styled(List)`
  list-style-type: none;
  font-weight: bold;
  vertical-align: middle;
  color: ${theme('colors.grayscale.dark')};

  li {
    display: inline-block;
    margin: ${theme('spaces.xs')};
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

    &:hover {
      cursor: pointer;
    }

    ${breakpointMax('m')`
      position: relative;
      padding-right: 2rem;
      vertical-align: middle;

      &:first-child {
        padding-right: 2rem;
      }
    `};
  }
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
  position: absolute;
  height: 34rem;
  width: 100%;
  background-color: #eee;
`

const StyledGrid = styled(Grid)`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: ${theme('spaces.xxl')} auto ${theme('spaces.xxxl')} auto;
  width: 95rem;

  ${breakpointMax('l')`
    width: 100%;
  `};
`

const StyledTeamSection = styled(Section)`
  padding-bottom: ${theme('spaces.xxl')};
  margin: 17rem auto 0;
`
const TeamWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 12.5rem;

  > div {
    margin: 0 auto ${theme('spaces.m')} auto;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 8rem;
    }
  }
`

const WebsiteLink = styled.a`
  color: ${theme('colors.primary')};
  text-decoration: none;
  font-size: ${theme('fonts.size.s')};
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

const ColGrid = styled(Col)`
  li {
    list-style-type: none;
  }
  img {
    max-width: 100%;
  }
`

const StyledDescription = styled.div`
  margin: ${theme('spaces.m')} 0 0 0;
`

const StyledCoverPro = styled.div`${({ imageUrl }) => css`

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
  
`}`

const renderList = items => (items ? <List>{items.map((item, i) => <li key={item['@id'] || i}>{item.name || item}</li>)}</List> : null)

class FirmDetails extends Component {
  static propTypes = {
    translate: PropTypes.func.isRequired,
    labelWithColon: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    locale: PropTypes.string,
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
      servedAreaCities: PropTypes.array,
      firmCertificates: PropTypes.array,
      firmPictures: PropTypes.array,
      trade: PropTypes.string,
    }),
  }

  constructor() {
    super()
    this.state = { showModal: false, contentModal: null }
  }

  showModal(description) {
    if (!isTouchDevice()) return
    this.setState({ contentModal: description, showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { showModal, contentModal } = this.state

    const { locale, translate, labelWithColon } = this.props

    const loading = this.props.loading

    const {
      logoUrl,
      name,
      postalCode,
      city,
      countryCode,
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
      servedAreaCities,
      trade,
    } = this.props.details

    let mainPicture = null
    if (firmPictures) {
      const mainPictureObj = firmPictures.filter(data => data.main)[0]
      if (mainPictureObj && mainPictureObj.url) mainPicture = mainPictureObj.url
    }

    const genericFirmDetailImage = locales[locale].genericFirmDetailImage

    const certificatesAvailable = firmCertificates && firmCertificates.length > 0

    return (
      <Loading loading={loading}>
        <Wrapper>
          <Section>
            <Grid>
              <StyledRow>
                <WrapperImagePro xs={12} m={5}>
                  <IconLink to="/projects" icon="back_arrow">
                    <FormattedMessage id="firm.details.back_link_title" />
                  </IconLink>
                  <StyledCoverPro imageUrl={mainPicture || genericFirmDetailImage} />
                </WrapperImagePro>
                <WrapperInfosPro xs={12} m={7}>
                  <InfosPro>
                    <Heading level={1}>{name}</Heading>
                    <Paragraph>{trade}</Paragraph>
                    <Notation>
                      <Star icon="star" />
                      <Star icon="star" />
                      <Star icon="star" />
                      <Star icon="star" />
                      <Icon icon="star" />
                      <strong> {globalRating}</strong> - {globalRatingCount} <FormattedMessage id="firm.details.rating_reviews" />
                    </Notation>
                    {firmCertificates &&
                      firmCertificates.length > 0 && (
                        <StyledCertificateList>
                          {labelWithColon(translate('firm.details.certifications'))}
                          {firmCertificates.map(item => (
                            <li
                              key={item['@id']}
                              data-tip={!isTouchDevice() ? item.certificate.description : null}
                              onClick={() => this.showModal(item.certificate.description)}
                            >
                              {item.certificate.name}
                              <IconCertificate icon="question-mark" />
                            </li>
                          ))}
                        </StyledCertificateList>
                      )}
                  </InfosPro>
                  {logoUrl && (
                    <LogoProImage image={logoUrl} size={'l'} />
                  )}
                  <Divider />
                  <WrapperContactsPro>
                    <StyledContactList>
                      <li>
                        <Icon icon="location-pin" />
                        {city} {postalCode} {countryCode}
                      </li>
                      <li>
                        <Icon icon="phone" />01 23 45 67 89
                      </li>
                      <li>
                        <Icon icon="mail" />mvenergies@quotatis.pro.com
                      </li>
                    </StyledContactList>
                    <StyledContactList>
                      <li>
                        {websiteUrl && (
                          <WebsiteLink href={normalizeUrl(websiteUrl)} rel="nofollow" target="_blank">
                            <FormattedMessage id="firm.details.website" />
                          </WebsiteLink>
                        )}
                      </li>
                    </StyledContactList>
                  </WrapperContactsPro>
                  <Divider />
                  <StyledDescription>
                    <ReadMore lines={7} more={translate('firm.details.see_more')} less={translate('firm.details.see_less')}>
                      {description}
                    </ReadMore>
                  </StyledDescription>
                </WrapperInfosPro>
              </StyledRow>
            </Grid>
          </Section>
          <Section title={translate('firm.details.more_information')} light>
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
            <StyledGrid>
              <MapWrapper>
                <FormattedMessage id="firm.details.served_area_cities" />: {renderList(servedAreaCities)}
              </MapWrapper>
            </StyledGrid>
          </Section>
          <StyledTeamSection>
            <Grid narrow>
              <BorderBox grey mediumBorder title={translate('firm.details.team')}>
                <TeamWrapper>
                  <TeamMemberWrapper>
                    <div>
                      <Image
                        src={
                          'http://res.cloudinary.com/quotatis/image/upload/v1505393997/ES/ChatbotImages/Q1/electricidad-domotica-alarmas.jpg'
                        }
                        alt={'Membre équipe 1'}
                      />
                    </div>
                    <strong>Bilal</strong>
                  </TeamMemberWrapper>
                  <TeamMemberWrapper>
                    <div>
                      <Image
                        src={
                          'http://res.cloudinary.com/quotatis/image/upload/v1505383041/GB/ChatbotImages/Q2/electrical-cctv-and-solar/emergency-electrician.jpg'
                        }
                        alt={'Membre équipe 2'}
                      />
                    </div>
                    <strong>Corentin</strong>
                  </TeamMemberWrapper>
                  <TeamMemberWrapper>
                    <div>
                      <Image
                        src={
                          'http://res.cloudinary.com/quotatis/image/upload/v1505382692/GB/ChatbotImages/Q2/architects-and-surveyors/planning-permission.jpg'
                        }
                        alt={'Membre équipe 3'}
                      />
                    </div>
                    <strong>Paul & Sandrine</strong>
                  </TeamMemberWrapper>
                </TeamWrapper>
              </BorderBox>
            </Grid>
          </StyledTeamSection>
          {firmPictures &&
            firmPictures.length > 0 && (
              <Section title={translate('firm.details.last_projects')} light>
                <StyledGrid>
                  <Row>
                    {firmPictures.map(item => (
                      <ColGrid key={item['@id']} xs={12} m={4} order={item['@id']} x>
                        <li key={item['@id']}>
                          <img src={transformThumbnailUrl(item.url)} alt={'alt'} />
                        </li>
                      </ColGrid>
                    ))}
                  </Row>
                </StyledGrid>
              </Section>
            )}
          {!isTouchDevice() && certificatesAvailable && <StyledReactTooltip type={'light'} effect={'solid'} place={'bottom'} />}
          {isTouchDevice() &&
            certificatesAvailable &&
            showModal && (
              <StyledOverlayModal onClick={this.hideModal}>
                <StyledModal>
                  <CloseAllButton closeAll={this.hideModal} />
                  <StyledContentModal>{contentModal}</StyledContentModal>
                </StyledModal>
              </StyledOverlayModal>
            )}
        </Wrapper>
      </Loading>
    )
  }
}

export default injectTranslate(FirmDetails)
