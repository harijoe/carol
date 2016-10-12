import React, { Component } from 'react'

class InputEmail extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
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
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

InputEmail.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }),
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

export default InputEmail
