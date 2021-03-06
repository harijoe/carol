import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import cloudinary from 'utils/cloudinary'
import isTouchDevice from 'utils/isTouchDevice'

import Heading from 'components/Heading'
import Card from 'components/Card'
import Image from 'components/Image'
import Icon from 'components/Icon'
import List from 'components/List'
import Link from 'components/Link'
import CloseAllButton from 'components/CloseAllButton'
import ProfileImage from 'components/ProfileImage'
import StarRating from 'components/StarRating'

const StyledCard = styled(Card)`
  ${breakpoint('xs')`
    width: calc(100vw - 4.8rem);
    margin-left: calc(${theme('spaces.m')} / 2);
    margin-right: calc(${theme('spaces.m')} / 2);
  `} ${breakpoint('m')`
    width: 32.5rem;
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2)
  `} position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 4.8rem);
  height: 100%;
`

const ClickableBackground = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  `};
`

const StyledHeading = styled(Heading)`
  position: relative;
  margin-bottom: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.xl')};
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`

const ImageWrapper = styled.figure`
  overflow: hidden;

  &::after,
  & {
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

const noPointerEvents = css`
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`

const FooterCard = styled.footer`
  position: relative;
  padding: ${theme('spaces.m')};
  padding-top: calc(${theme('spaces.m')} + 1.4rem);
  ${noPointerEvents} ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    padding-top: calc(${theme('spaces.l')} + 2rem);
  `};
`

const FirmImage = styled(ProfileImage)`
  position: absolute;
  bottom: -2rem;
  transition: all 0.3s ease;

  &:first-child {
    margin-left: ${theme('spaces.l')};
    left: 0;
  }
`

const StyledList = styled(List)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${theme('spaces.m')} 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  ${noPointerEvents} li {
    position: relative;
    padding: 0 0 ${theme('spaces.m')} ${theme('spaces.l')};
    ${noPointerEvents};
  }

  a {
    display: inline-block;
    vertical-align: middle;
    color: ${theme('colors.grayscale.darker')};
    text-decoration: underline;
    transition: all 0.3s ease-in;

    &:hover {
      color: ${theme('colors.secondary')};
      text-decoration: underline;
    }
  }
`

const StyledCertificateList = styled(List)`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: ${theme('spaces.m')};
  margin-bottom: 0;
  padding-top: ${theme('spaces.m')};
  list-style-type: none;
  border-top: 1px solid ${theme('colors.grayscale.lighter')};

  li {
    display: inline-block;
    margin: ${theme('spaces.xs')};
    padding: ${theme('spaces.s')};
    background-color: ${theme('colors.grey')};
    border-radius: 60px;
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

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  vertical-align: middle;
  fill: ${theme('colors.grayscale.dark')};
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
  position: absolute;
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

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`

class FirmListItem extends Component {
  static propTypes = {
    firm: PropTypes.shape({
      name: PropTypes.string,
      logoUrl: PropTypes.string,
      firmCertificates: PropTypes.array,
      globalRating: PropTypes.number,
      globalRatingCount: PropTypes.number,
    }),
    projectId: PropTypes.string,
    proPostCode: PropTypes.string,
    proPhone: PropTypes.string,
    proEmail: PropTypes.string,
    proPageEnabled: PropTypes.bool.isRequired,
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
    this.setState({ modalIsVisible: false })
  }

  render() {
    const { firm: { name, logoUrl, firmCertificates, globalRating, globalRatingCount, '@id': firmId }, projectId, proPostCode, proPhone, proEmail, proPageEnabled } = this.props

    const { showModal, contentModal } = this.state

    const LinkToPro = ({ children }) => (proPageEnabled ? <StyledLink to={`${projectId}${firmId}`}>{children}</StyledLink> : children)

    return (
      <StyledCard className="firm-item">
        {proPageEnabled && <ClickableBackground to={`${projectId}${firmId}`} />}
        <LinkToPro>
          <HeaderCard>
            <ImageWrapper>
              <BackgroundImage src={cloudinary('/placeholder-firm_image.jpg')} />
            </ImageWrapper>
            <FirmImage alt={'alt'} image={logoUrl} size="l" />
          </HeaderCard>
        </LinkToPro>
        <FooterCard>
          <LinkToPro>
            <StyledHeading level={3}>{name}</StyledHeading>
          </LinkToPro>
          <div>
            {globalRatingCount > 0 ?
              <div>
                <StarRating value={globalRating} />
                <strong> {globalRating}</strong> - {globalRatingCount} <FormattedMessage id="firm.details.rating_reviews" />
              </div>
             :
              <br />
            }
          </div>
          <StyledList>
            <li>
              <StyledIcon icon="location-pin" /> <span>{proPostCode}</span>
            </li>
            <li>
              <StyledIcon icon="phone" /> <Link to={`tel:${proPhone}`}>{proPhone}</Link>
            </li>
            <li>
              <StyledIcon icon="mail" /> <Link to={`mailto:${proEmail}`}>{proEmail}</Link>
            </li>
          </StyledList>
          {firmCertificates.length > 0 && (
            <StyledCertificateList>
              {firmCertificates.map(item => (
                /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
                <li
                  key={item['@id']}
                  data-tip={!isTouchDevice() ? item.certificate.description : null}
                  onClick={() => this.modalIsVisible(item.certificate.description)}
                >
                  {item.certificate.name}
                  <IconCertificate icon="question-mark" />
                </li>
              ))}
            </StyledCertificateList>
          )}
        </FooterCard>
        {isTouchDevice() &&
          showModal && (
            <StyledOverlayModal onClick={this.hideModal}>
              <StyledModal>
                <CloseAllButton closeAll={this.hideModal} />
                <StyledContentModal>{contentModal}</StyledContentModal>
              </StyledModal>
            </StyledOverlayModal>
          )}
      </StyledCard>
    )
  }
}

export default injectTranslate(FirmListItem)
