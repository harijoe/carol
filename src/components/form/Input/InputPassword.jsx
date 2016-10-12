import React, { Component } from 'react'

class InputPassword extends Component {
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
        type="password"
        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
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
  onChange: React.PropTypes.func.isRequired
}

export default InputPassword
