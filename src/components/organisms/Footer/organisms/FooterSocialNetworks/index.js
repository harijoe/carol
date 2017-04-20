import React from 'react'
import styled from 'styled-components'

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
    <Link><StyledIcon icon="social-facebook" /></Link>
    <Link><StyledIcon icon="social-twitter" /></Link>
    <Link><StyledIcon icon="social-google" /></Link>
    <Link><StyledIcon icon="social-linkedin" /></Link>
  </StyledSection>
)

export default FooterSocialNetworks
