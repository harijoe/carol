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

const EmailForm = ({ error, handleSubmit, intl: { formatMessage }, disabled, loading }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={RenderField}
      label={formatMessage(messages('user.email').label)}
      placeholder={formatMessage(messages('user.email').label)}
      disabled={loading || disabled}
    />
    {error && <FormattedMessage id={error} tagName="strong" />}
    <Button type="submit" {...{ disabled, loading }}>
      <FormattedMessage id="user.send" />
    </Button>
  </Form>
)

EmailForm.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(EmailForm)
