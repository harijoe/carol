import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { theme } from 'utils/style'
import messages from 'utils/messages'

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
  appearance: none;
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
          <StyledButton type="submit" {...{ disabled, loading }} highlight>
            <FormattedMessage id="user.resend" />
          </StyledButton>
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
