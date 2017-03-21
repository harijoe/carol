import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = ({ size }) => css`
  display: inline-block;
  width: ${size ? `${size / 16}rem` : '1em'};
  height: ${size ? `${size / 16}rem` : '1em'};
  box-sizing: border-box;
  margin: ${size ? `${size / 160}rem` : '0.1em'};

  & > svg {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.span`${styles}`

const Icon = ({ icon, ...props }) => {
  const svg = require(`raw-loader!./icons/${icon}.svg`)

  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default Icon
