import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, merge } from 'utils/style'

const styles = ({ strongShadow }) => {
  let baseStyle = css`
    box-shadow: 1px 1px 4px 0 rgba(19, 19, 19, .1);
  `

  if (strongShadow) {
    baseStyle = css`
      box-shadow: 0 0 10px 0 rgba(19, 19, 19, .1);
    `
  }

  const commonStyle = css`
    background: ${theme('colors.white')};
  `

  return merge(baseStyle, commonStyle)
}

const Wrapper = styled.div`${styles}`

const Card = ({ strongShadow, children }) => (
  <Wrapper strongShadow={strongShadow}>
    {children}
  </Wrapper>
)

Card.propTypes = {
  strongShadow: PropTypes.bool,
  children: PropTypes.any,
}

export default Card
