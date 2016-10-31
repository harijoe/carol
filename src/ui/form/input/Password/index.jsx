import React, { Component } from 'react'

class InputPassword extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  get pattern() {
    return (this.props.checkPattern) ? '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' : '.*'
  }

  render() {
    return (
      <input
        {...this.props.attr}
        type="password"
        pattern={this.pattern}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

InputPassword.propTypes = {
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

InputPassword.defaultProps = {
  checkPattern: true
}

export default InputPassword
