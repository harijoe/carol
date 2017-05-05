import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'

import { RenderField, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #000;
`

const PhoneForm = (props) => {
  const { error, handleSubmit, intl: { formatMessage }, disabled, loading } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="mobilePhone"
        component={RenderField}
        label={formatMessage(messages('user.mobile_phone').label)}
        placeholder={formatMessage(messages('user.mobile_phone').label)}
        disabled={loading || disabled}
      />
      {error && <FormattedMessage id={error} tagName="strong" />}
      <Button type="submit" {...{ disabled, loading }}>
        <FormattedMessage id="user.send" />
      </Button>
    </Form>
  )
}

PhoneForm.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(PhoneForm)
