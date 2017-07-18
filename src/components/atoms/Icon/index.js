import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import logging from 'logging'

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
  try {
    const svg = require(`./icons/${icon}.svg`)

    return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
  } catch (e) {
    logging.captureException(e)
    console.warn(e)

    return null
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default Icon
