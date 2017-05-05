import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'

import { RenderField, SendSMSButton } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #000;
`

const PhoneCodeForm = (props) => {
  const { error, handleSubmit, loading, intl: { formatMessage }, resendSMS, disabled, submit } = props

  const handleChange = (e) => {
    // auto-submit when the users enters 6 char
    if (e.target.value.length === 6) {
      /*
         window.setTimeout required, otherwise onChange is triggered AFTER submit
         and the value is then 5 char long, and not 6 as required
       */
      window.setTimeout(submit)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="code"
        component={RenderField}
        label={formatMessage(messages('user.code').label)}
        placeholder={'XXXXXX'}
        onChange={handleChange}
        disabled={loading || disabled}
      />
      {error && <FormattedMessage id={error} tagName="strong" />}
      {loading && 'loading'}
      {!loading && <SendSMSButton send={resendSMS} />}
    </Form>
  )
}

PhoneCodeForm.propTypes = {
  handleSubmit: PropTypes.func,
  resendSMS: PropTypes.func,
  loading: PropTypes.bool,
  submit: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(PhoneCodeForm)
