import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import { Button, CarouselPageTemplate, AnimatedLabelField } from 'components'

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
  margin-top: ${theme('spaces.xl')};

  ${breakpoint('m')`
    margin-top: ${theme('spaces.xxl')};
  `}
`

const ResetPasswordForm = ({ error, handleSubmit, loading, intl: { formatMessage } }) => (
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
      <StyledButton type="submit" loading={loading}>
        <FormattedMessage id="user.send" />
      </StyledButton>
    </Form>
  </CarouselPageTemplate>
)

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(ResetPasswordForm)
