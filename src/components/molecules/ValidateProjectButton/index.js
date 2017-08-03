import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'components'
import { theme } from 'utils/style'

const StyledLink = styled(Link)`
  margin-bottom: ${theme('spaces.s')};
  min-width: 100%;
`

const ValidateProjectButton = ({ url, authenticated, title, openPopin, setRedirectPathname }) => (<StyledLink
  onClick={() => {
    setRedirectPathname(url)
    openPopin()
  }}
  to={authenticated && url}
  button
>
  {title}
</StyledLink>)

ValidateProjectButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openPopin: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  setRedirectPathname: PropTypes.func.isRequired,
}

export default ValidateProjectButton
