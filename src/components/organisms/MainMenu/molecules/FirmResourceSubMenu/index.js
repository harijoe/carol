import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { locales } from 'config'
import { FormattedMessage } from 'react-intl'

import { Link } from 'components'

const SubMenuLink = styled(Link)`
  display: block;
  color: ${theme('colors.black')};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme('colors.secondary')};
  }
`

const FirmResourceSubMenu = ({ locale, submenu }) => {
  const submenuConfig = locales[locale].mainMenu.resource[submenu]
  const { path, ...otherProps } = submenuConfig

  return (
    <li>
      <SubMenuLink to={`${locales[locale].contentSiteUrl}${path}`} {...otherProps}>
        <FormattedMessage id={`firm.${submenu}`} />
      </SubMenuLink>
    </li>
  )
}

FirmResourceSubMenu.propTypes = {
  locale: PropTypes.string,
  submenu: PropTypes.string,
}

export default FirmResourceSubMenu
