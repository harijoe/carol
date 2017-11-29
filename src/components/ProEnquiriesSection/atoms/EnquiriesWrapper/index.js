import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import Grid from 'components/Grid'

const Wrapper = styled(Grid)`
  position: relative;
  margin: calc(${theme('grid.gutterWidth.s')} * -2rem) -${theme('grid.gutterWidth.s')}rem;
  padding: calc(${theme('grid.gutterWidth.s')} * 2rem) ${theme('grid.gutterWidth.s')}rem;

  &::after {
    position: absolute;
    z-index: 1;
    background-color: ${theme('colors.primary')};
    content: '';
  }

  * {
    position: relative;
    z-index: 2;
  }

  ${breakpointMax('m')`
    padding-bottom: 250px;
    min-height: 100vh;

    &::after {
      left: 0;
      top: calc(100vh - 300px);
      height: 80px;
      width: 100%;
      transform: skewY(-7deg);
    }
  `}

  ${breakpoint('m')`
    margin: calc(${theme('grid.gutterWidth.m')} * -2rem) -${theme('grid.gutterWidth.m')}rem;
    padding: calc(${theme('grid.gutterWidth.m')} * 2rem) ${theme('grid.gutterWidth.m')}rem;
    max-width: 50%;

    &::after {
      top: 0;
      left: 22%;
      height: 100%;
      width: 100%;
      transform: skewX(-15deg);
    }
  `}

  ${breakpoint('xl')`
    margin: -${theme('grid.gutterWidth.xl')}rem -${theme('grid.gutterWidth.xl')}rem;
    padding: ${theme('grid.gutterWidth.xl')}rem ${theme('grid.gutterWidth.xl')}rem;
    max-width: 55rem;

    &::after {
      left: 26%;
      transform: skewX(-35deg);
    }
  `}
`

const EnquiriesWrapper = ({ children }) =>
  <Wrapper fluid>
    {children}
  </Wrapper>

EnquiriesWrapper.propTypes = {
  children: PropTypes.any,
}

export default EnquiriesWrapper
