import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import injectTranslate from 'i18n/hoc/injectTranslate'

import RenderField from 'components/RenderField'

class AnimatedPasswordField extends Component {
  static propTypes = {
    translate: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    toggleDisabled: PropTypes.bool,
  }

  state = {
    hideLabel: true,
    passwordInputType: 'password',
    passwordIcon: 'eye',
  }

  componentWillMount() {
    const { toggleDisabled } = this.props
    if (toggleDisabled) this.setState({ passwordIcon: 'pwd-login' })
  }

  togglePassword = () => {
    const { toggleDisabled } = this.props
    if (toggleDisabled) return

    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
      passwordIcon: this.state.passwordIcon === 'eye' ? 'opened-eye' : 'eye',
    })
  }

  handleChange = e => this.setState({ hideLabel: e.currentTarget.value === '' })

  render() {
    const { label, toggleDisabled, translate, ...props } = this.props
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
        alt={toggleDisabled ? translate('password.eye.disable.tooltip') : ''}
      />
    )
  }
}

export default injectTranslate(AnimatedPasswordField)
