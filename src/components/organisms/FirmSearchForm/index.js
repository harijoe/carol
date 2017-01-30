import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { RenderField, Heading, Button } from 'components'
import messages from 'utils/messages'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
`

const FirmSearchForm = ({ handleSubmit, submitting, intl }) => (
  <Form method="POST" onSubmit={handleSubmit}>
    <Heading level={2}><FormattedMessage id="firm.find_pro" /></Heading>
    <Field name="_csrf" type="hidden" component="input" />
    <Field name="homeImprovementId" label={intl.formatMessage(messages('firm.details.home_improvement_id').label)} component={RenderField} />
    <Field name="servedAreaCityCode" label={intl.formatMessage(messages('firm.details.city_code').label)} component={RenderField} />
    <Button type="submit" disabled={submitting}><FormattedMessage id="search" /></Button>
  </Form>
)

FirmSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(FirmSearchForm)
