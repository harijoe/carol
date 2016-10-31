import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.onSubmit()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  children: React.PropTypes.any,
  onSubmit: React.PropTypes.func.isRequired
}
