import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Field } from 'redux-form'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import {
  Button,
  AnimatedLabelField,
  CarouselPageTemplate,
} from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  
  ${breakpoint('m')`
    width: 50%;
  `}
  
  strong {
    color: ${theme('colors.danger')};
  }
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

const ForgotPasswordForm = ({ error, handleSubmit, loading, intl: { formatMessage } }) => (
  <CarouselPageTemplate
    heading={formatMessage(messages('user.forgot_password.heading').label)}
    description={formatMessage(messages('user.forgot_password.description').label)}
  >
    <Form onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input" />
      <AnimatedLabelField
        name="email"
        type="email"
        icon="mail-login"
        label={formatMessage(messages('user.email').label)}
      />
      {error && <FormattedMessage id={error} tagName="strong" />}
      <StyledButton type="submit" loading={loading}><FormattedMessage id="user.send" /></StyledButton>
    </Form>
  </CarouselPageTemplate>
)

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(ForgotPasswordForm)
