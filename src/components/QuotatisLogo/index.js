import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectScroll from 'hoc/component/injectScroll'
import { breakpoint } from 'utils/style'

import IconLink from 'components/IconLink'

// https://goo.gl/RZjY64
// eslint-disable-next-line no-unused-vars
const StyledIconLink = styled(({ ...props }) => <IconLink {...props} />)`${() => css`
  position: absolute;
  top: -0.1rem;
  display: inline-block;
  height: 9.6rem;
  width: 7.6rem;

  ${breakpoint('l')`
    height: 11.4rem;
    width: 8rem; 
  `}

  span {
    height: 100%;
    width: 100%;
  }

`}`

const QuotatisLogo = ({ atTop, isHomepage }) =>
  <StyledIconLink
    // On homepage, scroll to the top instead of doing nothing
    onClick={() => {
      if (isHomepage === true) {
        window.scrollTo(0, 0)
      }
    }}
    to="/"
    icon={atTop && isHomepage ? 'quotatis-white' : 'quotatis'}
    size={480}
  />

QuotatisLogo.propTypes = {
  atTop: PropTypes.bool,
  isHomepage: PropTypes.bool,
}

export default injectScroll(QuotatisLogo)
