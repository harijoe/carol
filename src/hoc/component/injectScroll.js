import React, { Component } from 'react'
import throttle from 'lodash/throttle'

const scrollTopThreshold = 50

const injectScroll = (WrappedComponent) => {
  class injectScrollWrapper extends Component {
    state = {
      scrollX: null,
      scrollY: null,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
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

      return (
        <WrappedComponent
          {...this.props}
          scrollX={scrollX}
          scrollY={scrollY}
          atTop={scrollY < scrollTopThreshold}
        />
      )
    }
  }

  return injectScrollWrapper
}

export default injectScroll
