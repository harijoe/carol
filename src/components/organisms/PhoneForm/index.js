import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import { normalize, format } from 'utils/transformPhone'
import { theme, breakpoint } from 'utils/style'

import { RenderField, Button } from 'components'

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

const PhoneForm = (props) => {
  const { error, handleSubmit, intl: { formatMessage }, disabled, loading, language } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="mobilePhone"
        component={RenderField}
        label={formatMessage(messages('user.mobile_phone').label)}
        placeholder={formatMessage(messages('user.mobile_phone').label)}
        disabled={loading || disabled}
        type="phone"
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
  intl: intlShape.isRequired,
}

export default injectIntl(PhoneForm)
