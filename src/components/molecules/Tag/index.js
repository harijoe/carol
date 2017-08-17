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

const Tag = ({ link, label }) =>
  <StyledLink to={link}>
    {label}
  </StyledLink>

Tag.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
}

export default Tag
