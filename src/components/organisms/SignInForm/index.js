import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { RenderField, Button, Link, FacebookLogin, GoogleLogin } from 'components'
import messages from 'utils/messages'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
`
Form.displayName = 'Form'

const StyledLink = styled(Link)`
  display: block;
  margin: 10px 0;
`

const SignInForm = ({ error, handleSubmit, submitting, intl: { formatMessage } }) => (
  <div>
    <Form onSubmit={handleSubmit}>
      {error && <FormattedMessage id={error} tagName="strong" />}
      <Field name="email" type="text" component={RenderField} label={formatMessage(messages('user.email').label)} />
      <Field name="password" type="password" component={RenderField} label={formatMessage(messages('user.password').label)} />
      <Button type="submit" disabled={submitting}><FormattedMessage id="user.sign_in" tagName="span" /></Button>
    </Form>
    <StyledLink to="/signup"><FormattedMessage id="user.create_account" /></StyledLink>
    <StyledLink to="/forgot-password"><FormattedMessage id="user.forgot_password.heading" /></StyledLink>
    <FacebookLogin />
    <GoogleLogin />
  </div>
)

SignInForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  error: React.PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(SignInForm)
