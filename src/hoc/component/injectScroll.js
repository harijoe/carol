import React, { Component } from 'react'
import throttle from 'lodash/throttle'

const scrollTopThreshold = 50

const injectScroll = (WrappedComponent) => {
  class injectScrollWrapper extends Component {
    state = {
      scrollX: null,
      scrollY: null,
    }

    componentWillMount() {
      // To avoid SSR issues
      if (window.addEventListener != null) {
        window.addEventListener('scroll', this.handleScroll)
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = throttle(() => {
      this.setState({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      })
    }, 200)

    render() {
      const { scrollX, scrollY } = this.state
      const atTop = scrollY == null ? true : scrollY < scrollTopThreshold

      return (
        <WrappedComponent
          {...{ ...this.props, scrollX, scrollY, atTop }}
        />
      )
    }
  }

  return injectScrollWrapper
}

export default injectScroll
