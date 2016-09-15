import React, { Component } from 'react'

export default class Input extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <input
        {...this.props.attr}
        value={this.props.value}
        onChange={this.props.handleChange}
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
      'password'
    ]).isRequired,
  }).isRequired,
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired
}
