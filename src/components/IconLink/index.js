import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Icon from 'components/Icon'
import Link from 'components/Link'

const iconStyles = ({ hasText, right, responsive }) => {
  const margin = right ? '0 0 0 0.25em' : '0 0.25em 0 0'

  return css`
    margin: ${hasText ? margin : 0};

    @media screen and (max-width: 420px) {
      margin: ${responsive && 0};
    }
  `
}

const textStyle = ({ responsive }) => css`
  @media screen and (max-width: 420px) {
    display: ${responsive && 'none'};
  }
`

const StyledIcon = styled(Icon)`${iconStyles}`
const Text = styled.span`${textStyle};`

const IconLink = ({ color, size, icon, right, responsive, children, ...props }) => {
  const iconElement = (
    <StyledIcon size={size && size / 3} icon={icon} hasText={!!children} right={right} responsive={responsive} color={color} />
  )

  return (
    <Link {...props}>
      {!right && iconElement}
      <Text responsive={responsive}>
        {children}
      </Text>
      {right && iconElement}
    </Link>
  )
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
}

export default IconLink
