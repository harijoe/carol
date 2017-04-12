import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'

import { RenderField, Button, Link, FacebookLogin, GoogleLogin, Heading } from 'components'

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

const SignInForm = ({ error, handleSubmit, submitting, intl: { formatMessage }, ...props }) => (
  <div {...props}>
    <Heading level={2}><FormattedMessage id="login.coming_back" /></Heading>
    <FacebookLogin />
    <GoogleLogin />
    <Form onSubmit={handleSubmit}>
      {error && <FormattedMessage id={error} tagName="strong" />}
      <Field name="email" type="text" component={RenderField} label={formatMessage(messages('user.email').label)} />
      <Field name="password" type="password" component={RenderField} label={formatMessage(messages('user.password').label)} />
      <StyledLink kind="black" to="/forgot-password"><FormattedMessage id="user.forgot_password.heading" /></StyledLink>
      <Button type="submit" disabled={submitting}><FormattedMessage id="user.sign_in" tagName="span" /></Button>
    </Form>
    <div className="footer">
      <FormattedMessage id="user.no_account_question" />
      <StyledLink kind="black" to="/signup"><FormattedMessage id="user.create_account" /></StyledLink>
    </div>
  </div>
)

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(SignInForm)
