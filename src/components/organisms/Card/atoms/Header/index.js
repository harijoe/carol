import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'

const styles = ({ height }) => css`
  position: relative;
  padding: ${theme('spaces.s')};

  ${ifThen(height === 'small', css`height: 15rem;`)}
  ${ifThen(height === 'medium', css`height: 22.5rem;`)}
`

const Wrapper = styled.header`${styles}`

const Header = ({ className, ...props }) =>
  <Wrapper className={`qs-Card-header ${className}`} {...props} />

Header.propTypes = {
  height: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  height: 'medium',
}

export default Header
