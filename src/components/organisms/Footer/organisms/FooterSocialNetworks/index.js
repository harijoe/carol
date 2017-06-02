import React from 'react'
import styled from 'styled-components'
import { socialNetworksUrls } from 'config'

import { Icon, Link, Section } from 'components'
import { theme, breakpoint } from 'utils/style'

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

const StyledIcon = styled(Icon)`
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
  margin-right: ${theme('spaces.l')};

  ${breakpoint('m')`
    height: ${theme('icons.size.m')};
    width: ${theme('icons.size.m')};
  `}
`

const FooterSocialNetworks = () => (
  <StyledSection>
    <Link to={socialNetworksUrls.facebook} target="_blank"><StyledIcon icon="social-facebook" /></Link>
    <Link to={socialNetworksUrls.twitter} target="_blank"><StyledIcon icon="social-twitter" /></Link>
    <Link to={socialNetworksUrls.linkedin} target="_blank"><StyledIcon icon="social-linkedin" /></Link>
    <Link to={socialNetworksUrls.instagram} target="_blank"><StyledIcon icon="social-instagram" /></Link>
  </StyledSection>
)

export default FooterSocialNetworks
