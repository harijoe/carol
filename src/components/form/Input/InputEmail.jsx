import React, { Component } from 'react'

class InputEmail extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  get pattern() {
    return (this.props.checkPattern) ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$' : '.*'
  }

  render() {
    return (
      <input
        {...this.props.attr}
        type="email"
        pattern={this.pattern}
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
  onChange: React.PropTypes.func.isRequired,
  checkPattern: React.PropTypes.bool
}

InputEmail.defaultProps = {
  checkPattern: true
}

export default InputEmail
