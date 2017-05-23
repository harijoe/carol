import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'components'

class Loading extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    loading: PropTypes.bool,
  }

  static defaultProps = {
    loading: false,
    children: null,
  }

  render() {
    const { loading, children } = this.props

    // @TODO: Implement a spinner here instead of Loading...
    const content = loading === true ? <Icon icon="spinner" size={60} /> : children

    return <div>{content}</div>
  }
}

export default Loading
