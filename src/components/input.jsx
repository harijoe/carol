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
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.oneOf([
      'text',
      'password'
    ]),
  }).isRequired,
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func
}
