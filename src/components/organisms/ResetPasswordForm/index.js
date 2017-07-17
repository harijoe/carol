import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
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

const ResetPasswordForm = ({ error, handleSubmit, loading, translate }) => (
  <CarouselPageTemplate
    heading={translate('user.reset_password.heading')}
    description={translate('user.reset_password.description')}
  >
    <Form onSubmit={handleSubmit}>
      <Field name="token" type="hidden" component="input" />
      {error && <FormattedMessage id={error} tagName="strong" />}
      <AnimatedLabelField
        name="password"
        type="password"
        icon="pwd-login"
        label={translate('user.password')}
      />
      <AnimatedLabelField
        name="passwordValidation"
        type="password"
        icon="pwd-login"
        label={translate('user.confirm_password')}
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
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ResetPasswordForm)
