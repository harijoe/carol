import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { RenderField, Heading, Button } from 'components'
import messages from 'utils/messages'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
`

const ForgotPasswordForm = ({ handleSubmit, submitting, intl }) => (
  <Form onSubmit={handleSubmit}>
    <Heading level={2}><FormattedMessage id="user.forgot_password.heading" /></Heading>
    <Field name="_csrf" type="hidden" component="input" />
    <Field name="email" type="email" label={intl.formatMessage(messages('user.email').label)} component={RenderField} />
    <Button type="submit" disabled={submitting}><FormattedMessage id="user.send" /></Button>
  </Form>
)

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(ForgotPasswordForm)
