import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import { locales } from 'config'
import { Icon, Link } from 'components'

const StyledIcon = styled(Icon)`
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
  margin-right: ${theme('spaces.l')};

  ${breakpoint('m')`
    height: ${theme('icons.size.m')};
    width: ${theme('icons.size.m')};
  `}
`

const FooterSocialNetworksLink = ({ id, locale }) => {
  if (locales[locale].footer.social[id] == null) {
    return null
  }

  return (
    <Link to={locales[locale].footer.social[id]} target="_blank">
      <StyledIcon icon={`social-${id}`} />
    </Link>
  )
}

FooterSocialNetworksLink.propTypes = {
  id: PropTypes.string,
  locale: PropTypes.string,
}

export default FooterSocialNetworksLink
