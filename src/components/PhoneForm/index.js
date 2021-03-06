import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { normalize, format } from 'utils/transformPhone'
import { theme, breakpoint } from 'utils/style'

import RenderField from 'components/RenderField'
import Button from 'components/Button'

const Form = styled.form`
  width: 100%;
  padding: 0;
  margin-top: ${theme('spaces.m')};

  strong {
    color: ${theme('colors.danger')};
  }
`

const StyledButton = styled(Button)`
  width: 100%;

  ${breakpoint('s')`
    min-width: 40rem;
  `}
`

const PhoneForm = props => {
  const { error, handleSubmit, translate, disabled, loading, language } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="mobilePhone"
        component={RenderField}
        label={translate('user.mobile_phone')}
        placeholder={translate('user.mobile_phone')}
        disabled={loading || disabled}
        type="tel"
        normalize={normalize(language)}
        format={format(language)}
      />
      {error && <FormattedMessage id={error} tagName="strong" />}
      <StyledButton type="submit" {...{ disabled, loading }}>
        <FormattedMessage id="user.send" />
      </StyledButton>
    </Form>
  )
}

PhoneForm.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
  language: PropTypes.string,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(PhoneForm)
