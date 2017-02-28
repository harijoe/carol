import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { RenderField, Button, Link, FacebookLogin, GoogleLogin } from 'components'

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

const SignInForm = ({ error, handleSubmit, submitting }) => (
  <div>
    <Form onSubmit={handleSubmit}>
      {error && <FormattedMessage id={error} tagName="strong" />}
      <Field name="email" type="text" component={RenderField} label="Email" />
      <Field name="password" type="password" component={RenderField} label="Password" />
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
}

export default SignInForm
