import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cloudinary from 'utils/cloudinary'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import Section from 'components/Section'
import Row from 'components/Row'
import Col from 'components/Col'
import Icon from 'components/Icon'
import Image from 'components/Image'
import SmallTitle from './atoms/SmallTitle'

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;
  min-height: 375px;
  background-image: url(${cloudinary('/pattern/bookmark_canvas.svg')});
  background-repeat: no-repeat;
  background-position: 0 0;

  * {
    position: relative;
    z-index: 1;
  }
`

const RightCol = styled(Col)`
  ${breakpointMax('m')`
    margin-top: ${theme('spaces.xxl')};
  `}
`

const Logo = styled(Icon)`
  position: absolute;
  left: 0;
  top: ${theme('spaces.xxxl')};
  z-index: 0;
  height: auto;
  width: 100%;

  ${breakpoint('m')`
    top: ${theme('spaces.xxl')};
    left: 50%;
    margin-left: -260px;
    width: 520px;
  `}
`

const PartnersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  img {
    margin: ${theme('spaces.s')} 0 ${theme('spaces.s')} ${theme('spaces.m')};
    max-height: 50px;
    width: auto;

    ${breakpoint('l')`
      margin-left: ${theme('spaces.l')};
    `}

    &:first-child {
      margin-left: 0;
    }
  }
`

const CommunityText = styled.p`
  margin: 0;
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.xxl')};
  line-height: 1.2;

  span {
    color: ${theme('colors.primary')};
    font-size: ${theme('fonts.size.xxxl')};
  }

  strong {
    display: block;
    font-family: ${theme('fonts.family.andesBlack')};
    font-size: ${theme('fonts.size.xl')};
  }
`

const ProTrustUs = ({ translate, communityNumber }) =>
  <StyledSection title={translate('pro.trust_us.title')}>
    <Logo icon="logo-white-withoutsignet" />
    <Row>
      <Col xs={12} m={6}>
        <SmallTitle title={translate('pro.trust_us.community_title')} />
        <CommunityText>
          <span>{communityNumber}</span> {translate('companies')} <strong>{translate('pro.trust_us.community_text')}</strong>
        </CommunityText>
      </Col>
      <RightCol xs={12} m={6}>
        <SmallTitle title={translate('pro.trust_us.partners_title')} />
        <PartnersWrapper>
          <Image src="http://res.cloudinary.com/quotatis/image/upload/v1499860659/partner/Leroy_Merlin.svg" />
          <Image src="http://res.cloudinary.com/quotatis/image/upload/v1511183619/partner/bricoman.svg" />
          <Image src="http://res.cloudinary.com/quotatis/image/upload/v1509701027/partner/seloger_RGB.png" />
        </PartnersWrapper>
      </RightCol>
    </Row>
  </StyledSection>

ProTrustUs.propTypes = {
  translate: PropTypes.func,
  communityNumber: PropTypes.number,
}

ProTrustUs.defaultProps = {
  communityNumber: '352',
}

export default injectTranslate(ProTrustUs)
