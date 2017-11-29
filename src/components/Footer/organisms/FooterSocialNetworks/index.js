import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Section from 'components/Section'
import { theme, breakpoint } from 'utils/style'
import FooterSocialNetworksLink from '../../molecules/FooterSocialNetworksLink'

const StyledSection = styled(Section)`
  padding-bottom: ${theme('spaces.m')};
  padding-top: ${theme('spaces.m')};

  ${breakpoint('m')`
    padding-bottom: ${theme('spaces.l')};
    padding-top: ${theme('spaces.l')};
  `}

  ${breakpoint('xl')`
    padding-bottom: ${theme('spaces.l')};
    padding-top: ${theme('spaces.l')};
  `}
`

const FooterSocialNetworks = ({ locale }) =>
  <StyledSection>
    <FooterSocialNetworksLink id="facebook" locale={locale} />
    <FooterSocialNetworksLink id="twitter" locale={locale} />
    <FooterSocialNetworksLink id="linkedin" locale={locale} />
    <FooterSocialNetworksLink id="instagram" locale={locale} />
    <FooterSocialNetworksLink id="google" locale={locale} />
    <FooterSocialNetworksLink id="youtube" locale={locale} />
    <FooterSocialNetworksLink id="pinterest" locale={locale} />
  </StyledSection>

FooterSocialNetworks.propTypes = {
  locale: PropTypes.string,
}

export default FooterSocialNetworks
