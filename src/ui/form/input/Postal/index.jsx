import React, { Component } from 'react'

class InputPostal extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  get pattern() {
    return (this.props.checkPattern) ? '^[0-9]{5}$' : '.*'
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

InputPostal.propTypes = {
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

InputPostal.defaultProps = {
  checkPattern: true
}

export default InputPostal
