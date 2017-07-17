import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Field } from 'redux-form'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

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
  margin-top: ${theme('spaces.xl')};

  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.m')};
  `}

  ${breakpoint('m')`
    margin-top: ${theme('spaces.xxl')};
  `}
`

const ForgotPasswordForm = ({ error, handleSubmit, loading, translate }) => (
  <CarouselPageTemplate
    heading={translate('user.forgot_password.heading')}
    description={translate('user.forgot_password.description')}
  >
    <Form onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input" />
      <AnimatedLabelField
        name="email"
        type="email"
        icon="mail-login"
        label={translate('user.email')}
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
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ForgotPasswordForm)
