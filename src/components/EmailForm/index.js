import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

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
  appearance: none;
`

class EmailForm extends Component {
  state = {
    clicked: false,
  }

  handleSubmit = (values, dispatch) => {
    values.preventDefault()
    this.setState({ clicked: true })
    this.props.handleSubmit(values, dispatch, this.props.origin)
  }

  render() {
    const { error, translate, disabled, loading } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <Field
          name="email"
          component={RenderField}
          label={translate('user.email')}
          placeholder={translate('user.email')}
          disabled // Email modifications are disabled for V1
        />
        {error && <FormattedMessage id={error} tagName="strong" />}
        {!this.state.clicked &&
          <StyledButton type="submit" {...{ disabled, loading }} highlight>
            <FormattedMessage id="user.resend" />
          </StyledButton>}
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
  origin: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(EmailForm)
