import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectScroll from 'hoc/component/injectScroll'

import Icon from 'components/Icon'

// https://goo.gl/RZjY64
// eslint-disable-next-line no-unused-vars
const StyledIconLink = styled(({ ...props }) => <Icon {...props} />)`${() => css`
  position: absolute;
  top: -0.1rem;
  display: inline-block;
  height: 17rem;
  width: 24rem;
  margin: -32px 0 0 10%;
`}`

const QuotatisLogoStatic = ({ country }) => {
  let iconSuffix
  switch (country) {
    case 'FR':
      iconSuffix = 'fr'
      break
    case 'GB':
      iconSuffix = 'uk'
      break
    case 'ES':
    default:
      iconSuffix = 'es'
      break
  }

  return <StyledIconLink
    icon={`quotatis-static-${iconSuffix}`}
    size={480}
  />
}

QuotatisLogoStatic.propTypes = {
  country: PropTypes.string,
}

export default injectScroll(QuotatisLogoStatic)
