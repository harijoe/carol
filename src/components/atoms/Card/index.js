import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, merge } from 'utils/style'

const styles = ({ strongShadow }) => {
  let baseStyle = css`
    box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
  `

  if (strongShadow) {
    baseStyle = css`
      box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
    `
  }

  const commonStyle = css`
    background: ${theme('colors.white')};
    transition: all 0.3s ease;
  `

  return merge(baseStyle, commonStyle)
}

const Wrapper = styled.div`${styles};`

const Card = ({ strongShadow, children, ...props }) =>
  <Wrapper strongShadow={strongShadow} {...props}>
    {children}
  </Wrapper>

Card.propTypes = {
  strongShadow: PropTypes.bool,
  children: PropTypes.any,
}

export default Card
