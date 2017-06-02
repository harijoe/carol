import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { theme, ifThen } from 'utils/style'

const styles = ({ focus }) => css`
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  padding: 0;
  border-radius: 4px;
  background: ${theme('colors.grey')};
  ${ifThen(focus, css`background: ${theme('colors.primary')};`)}   
`

const StyledDots = styled.div`${styles}`

const Dots = ({ focus, ...props }) => (
  <StyledDots focus={focus} {...props} />
)

Dots.propTypes = {
  focus: PropTypes.bool,
}

export default Dots
