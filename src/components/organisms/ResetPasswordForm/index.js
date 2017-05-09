import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { Button, CarouselPageTemplate, AnimatedLabelField } from 'components'
import messages from 'utils/messages'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
`

const ResetPasswordForm = ({ error, handleSubmit, submitting, intl: { formatMessage } }) => (
  <CarouselPageTemplate
    heading={formatMessage(messages('user.reset_password.heading').label)}
    description={formatMessage(messages('user.reset_password.description').label)}
  >
    <Form onSubmit={handleSubmit}>
      <Field name="token" type="hidden" component="input" />
      {error && <FormattedMessage id={error} tagName="strong" />}
      <AnimatedLabelField
        name="password"
        type="password"
        icon="pwd-login"
        label={formatMessage(messages('user.password').label)}
      />
      <AnimatedLabelField
        name="passwordValidation"
        type="password"
        icon="pwd-login"
        label={formatMessage(messages('user.confirm_password').label)}
      />
      <Button type="submit" disabled={submitting}>
        <FormattedMessage id="user.send" />
      </Button>
    </Form>
  </CarouselPageTemplate>
)

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(ResetPasswordForm)
