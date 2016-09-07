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
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        className={this.props.className}
      />
    )
  }
}

Input.propTypes = {
  className: React.PropTypes.string
}
