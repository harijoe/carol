import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

const Text = styled.p`
  margin-bottom: ${theme('spaces.xl')};
  margin-top: 0;
  color: ${theme('colors.grayscale.dark')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xxl')};
  `}
`

const SmallTitle = ({ title }) =>
  <Text>
    {title}
  </Text>

SmallTitle.propTypes = {
  title: PropTypes.string,
}

export default SmallTitle
