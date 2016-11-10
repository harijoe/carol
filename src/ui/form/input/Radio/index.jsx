import React, { Component } from 'react'

export default class InputRadio extends Component {
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
        type="radio"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

InputRadio.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}
