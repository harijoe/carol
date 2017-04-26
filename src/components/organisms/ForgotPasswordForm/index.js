import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Field } from 'redux-form'
import messages from 'utils/messages'
import { breakpoint } from 'utils/style'

import { Heading, Paragraph, Button, AnimatedLabelField } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  margin-top: 100px;
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 5px;
  margin-bottom: 20px;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
  ${breakpoint('xs')`
    width: 100%;
  `}
`

const ForgotPasswordForm = ({ error, handleSubmit, submitting, intl }) => (
  <Form onSubmit={handleSubmit}>
    <Heading level={2}><FormattedMessage id="user.forgot_password.heading" /></Heading>
    <StyledParagraph><FormattedMessage id="user.forgot_password.description" /></StyledParagraph>
    <Field name="_csrf" type="hidden" component="input" />
    {error && <FormattedMessage id={error} tagName="strong" />}
    <AnimatedLabelField
      name="email"
      type="email"
      icon="mail-login"
      label={intl.formatMessage(messages('user.email').label)}
    />
    <StyledButton type="submit" disabled={submitting}><FormattedMessage id="user.send" /></StyledButton>
  </Form>
)

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(ForgotPasswordForm)
