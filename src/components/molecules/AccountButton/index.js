import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'
import injectScroll from 'hoc/component/injectScroll'

import { Icon } from 'components'

const StyledIcon = styled(Icon)`${({ atTop }) => css`
  ${ifThen(!atTop, css`
    .qs-header-cnx {
      fill: ${theme('colors.black')};
    }
  `)}
`}`

const AccountButton = ({ togglePopinAccount, atTop }) => (
  <StyledIcon
    onClick={togglePopinAccount}
    size={32}
    icon="login"
    atTop={atTop}
  />
)

AccountButton.propTypes = {
  togglePopinAccount: PropTypes.func,
  atTop: PropTypes.bool,
}

export default injectScroll(AccountButton)
