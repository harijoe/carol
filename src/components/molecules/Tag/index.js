import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'utils/style'
import { Link } from 'components'

const StyledLink = styled(Link)`
  border-radius: 6rem;
  padding: ${theme('spaces.s')} ${theme('spaces.m')};
  margin-bottom: ${theme('spaces.s')};
  margin-right: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  background: ${theme('colors.grayscale.lighter')};
  color: ${theme('colors.grayscale.dark')};
  line-height: 1;
  display: inline-block;
`

const Tag = ({ link, label, className }) =>
  <StyledLink to={link} className={className}>
    {label}
  </StyledLink>

Tag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Tag
