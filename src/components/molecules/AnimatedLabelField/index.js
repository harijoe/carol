import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { RenderField } from 'components'

class AnimatedLabelField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    icon: 'help',
    label: 'label',
  }

  state = {
    hideLabel: true,
  }

  componentDidMount() {
    if (this.field.value) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ hideLabel: false })
    }
  }

  handleChange = e => this.setState({ hideLabel: e.currentTarget.value === '' })

  render() {
    const { label, ...props } = this.props

    return (
      <Field
        label={label}
        ref={input => (this.field = input)}
        hideLabel={this.state.hideLabel}
        placeholder={label}
        onChange={this.handleChange}
        component={RenderField}
        {...props}
      />
    )
  }
}

export default AnimatedLabelField
