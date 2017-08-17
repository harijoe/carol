import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { RenderField } from 'components'

class AnimatedPasswordField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
  }

  state = {
    hideLabel: true,
    passwordInputType: 'password',
    passwordIcon: 'eye',
  }

  togglePassword = () => {
    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
      passwordIcon: this.state.passwordIcon === 'eye' ? 'opened-eye' : 'eye',
    })
  }

  handleChange = e => this.setState({ hideLabel: e.currentTarget.value === '' })

  render() {
    const { label, ...props } = this.props
    const { passwordInputType, passwordIcon, hideLabel } = this.state

    return (
      <Field
        {...props}
        label={label}
        hideLabel={hideLabel}
        placeholder={label}
        onChange={this.handleChange}
        component={RenderField}
        onIconClick={this.togglePassword}
        type={passwordInputType}
        icon={passwordIcon}
      />
    )
  }
}

export default AnimatedPasswordField
