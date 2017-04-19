import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { RenderField, RenderCaptcha, Heading, Button, FacebookLogin, GoogleLogin } from 'components'
import messages from 'utils/messages'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  margin-top: 100px;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
`

class SignUpForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    intl: intlShape.isRequired,
  }

  state = {
    passwordInputType: 'password',
  }

  togglePassword = () => {
    this.setState({
      passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password',
    })
  }

  render() {
    const { handleSubmit, submitting, intl } = this.props

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Heading level={2}>
            <FormattedMessage id="user.sign_up.heading" />
          </Heading>
          <Field
            name="_csrf"
            type="hidden"
            component="input"
          />
          <Field
            name="email"
            label={intl.formatMessage(messages('user.email').label)}
            component={RenderField}
          />
          <Field
            name="password"
            type={this.state.passwordInputType}
            label={intl.formatMessage(messages('user.password').label)}
            component={RenderField}
          />
          <Field
            name="showPassword"
            type="checkbox"
            label={intl.formatMessage(messages('user.password.show').label)}
            onChange={this.togglePassword}
            component={RenderField}
          />
          <Field
            name="newsletterSubscription"
            type="checkbox"
            label={intl.formatMessage(messages('user.newsletter_subscription').label)}
            component={RenderField}
          />
          <Field
            name="captcha"
            component={RenderCaptcha}
          />
          <StyledButton type="submit" disabled={submitting}>
            <FormattedMessage id="user.sign_up" />
          </StyledButton>
        </Form>
        <FacebookLogin />
        <GoogleLogin />
      </div>
    )
  }
}

export default injectIntl(SignUpForm)
