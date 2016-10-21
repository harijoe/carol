import React, { Component } from 'react'

export default class Input extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <input
        {...this.props.attr}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

Input.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf([
      'text',
      'password',
      'email'
    ]).isRequired,
    pattern: React.PropTypes.string
  }).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}
