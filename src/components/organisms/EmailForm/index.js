import React, { Component } from 'react'
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

class EmailForm extends Component {
  state = {
    clicked: false,
  }

  handleSubmit = (values, dispatch) => {
    this.setState({ clicked: true })
    this.props.handleSubmit(values, dispatch)
  }

  render() {
    const { error, intl: { formatMessage }, disabled, loading } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <Field
          name="email"
          component={RenderField}
          label={formatMessage(messages('user.email').label)}
          placeholder={formatMessage(messages('user.email').label)}
          disabled={loading || disabled || this.state.clicked}
        />
        {error && <FormattedMessage id={error} tagName="strong" />}
        {
          !this.state.clicked &&
          <Button type="submit" {...{ disabled, loading }}>
            <FormattedMessage id="user.resend" />
          </Button>
        }
        {this.state.clicked && <FormattedMessage id="user.email.sent" />}
      </Form>
    )
  }
}


EmailForm.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(EmailForm)
