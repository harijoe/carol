import React, { Component } from 'react'

class InputPhone extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  get pattern() {
    return (this.props.checkPattern) ? '^([0|+[0-9]{1,5})?([1-9][0-9]{9})$' : '.*'
  }

  render() {
    return (
      <input
        {...this.props.attr}
        type="text"
        pattern={this.pattern}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

InputPhone.propTypes = {
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

InputPhone.defaultProps = {
  checkPattern: true
}

export default InputPhone
