import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import messages from 'utils/messages'
import { RenderField, Button } from 'components'

const StyledForm = styled.form`
  box-sizing: border-box;
  padding: 1rem;
`

class Form extends Component {
  componentDidUpdate() {
    this.field.focus()
  }

  render() {
    const {
      reply,
      intl: { formatMessage },
      handleSubmit,
      reset,
      pristine,
      submitting,
      disabled,
    } = this.props
    const submit = (values) => {
      reply(values.response)
      reset()
    }

    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Field
          disabled={disabled}
          name="response"
          component={RenderField}
          placeholder={formatMessage(messages('project.elaboration.response').label)}
          autoFocus
          innerRef={(field) => { this.field = field }}
        />
        <Button disabled={pristine || submitting} type="submit">
          <FormattedMessage id="project.elaboration.submit" tagName="span" />
        </Button>
      </StyledForm>
    )
  }
}

Form.propTypes = {
  reply: PropTypes.func.isRequired,
  intl: intlShape,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default reduxForm({ form: 'ProjectElaboration' })(injectIntl(Form))
