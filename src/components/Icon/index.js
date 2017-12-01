import React, { Component } from 'react'
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

const Wrapper = styled.span`${styles};`

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
  }

  state = {
    component: null,
  }

  async componentDidMount() {
    const { icon, ...props } = this.props
    try {
      const Svg = require(`./icons/${icon}.svg`)
      const component = <Wrapper {...props}><Svg /></Wrapper>

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ component })
    } catch (e) {
      logging.captureException(e)
      console.warn(e)
    }
  }

  render() {
    return this.state.component
  }
}

export default Icon
