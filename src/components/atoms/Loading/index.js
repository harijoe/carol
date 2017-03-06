import React, { Component } from 'react'

class Loading extends Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
    loading: React.PropTypes.bool,
  }

  static defaultProps = {
    loading: false,
    children: null,
  }

  render() {
    const { loading, children } = this.props

    // @Todo: Implement a spinner here instead of Loading...
    const content = loading === true ? 'Loading...' : children

    return <div>{content}</div>
  }
}

export default Loading
