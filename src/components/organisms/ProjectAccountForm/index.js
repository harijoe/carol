import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'

import { RenderField, Button, Label, RenderSelect } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #000;
  margin-top: 200px;
`

const ProjectAccountForm = (props) => {
  const { handleSubmit, submitting, intl } = props
  const formatMessage = intl.formatMessage

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <span><FormattedMessage id="user.gender" tagName="div" /></span>
        <div>
          <Label htmlFor="mr"><Field name="gender" component="input" type="radio" value="Mr" /><FormattedMessage id="user.mr" tagName="span" /></Label>
          <Label htmlFor="mrs"><Field name="gender" component="input" type="radio" value="Mrs" /><FormattedMessage id="user.mrs" tagName="span" /></Label>
        </div>
      </div>
      <Field
        name="firstName"
        component={RenderField}
        label={formatMessage(messages('user.first_name').label)}
        placeholder={formatMessage(messages('user.first_name').label)}
      />
      <Field
        name="lastName"
        component={RenderField}
        label={formatMessage(messages('user.last_name').label)}
        placeholder={formatMessage(messages('user.last_name').label)}
      />
      <Field
        name="purpose"
        component={RenderSelect}
        label={formatMessage(messages('project.purpose').label)}
        placeholder={formatMessage(messages('project.purpose').label)}
        options={[
          {
            value: 'find_a_pro',
            id: 'project.find_a_pro',
          },
          {
            value: 'quotation',
            id: 'project.quotation',
          },
        ]}
      /><br />
      <Field
        name="startTimeframe"
        component={RenderSelect}
        label={formatMessage(messages('project.startTimeframe').label)}
        placeholder={formatMessage(messages('project.startTimeframe').label)}
        options={[
          {
            value: 'now',
            id: 'project.startTimeframe.now',
          },
          {
            value: '1_to_3_months',
            id: 'project.startTimeframe.1_to_3_months',
          },
          {
            value: '3_to_6_months',
            id: 'project.startTimeframe.3_to_6_months',
          },
          {
            value: '6_to_12_months',
            id: 'project.startTimeframe.6_to_12_months',
          },
        ]}
      /><br />
      <Field
        name="contactPreference"
        component={RenderSelect}
        label={formatMessage(messages('user.contactPreference').label)}
        placeholder={formatMessage(messages('user.contactPreference').label)}
        options={[
          {
            value: 'email',
            id: 'user.contactPreference.email',
          },
          {
            value: 'phone',
            id: 'user.contactPreference.phone',
          },
        ]}
      /><br />
      <Field
        name="contactComment"
        component={RenderSelect}
        label={formatMessage(messages('user.contactComment').label)}
        placeholder={formatMessage(messages('user.contactComment').label)}
        options={[
          {
            value: 'no_preferences',
            id: 'user.contactComment.no_preferences',
          },
          {
            value: 'during_business_hours',
            id: 'user.contactComment.during_business_hours',
          },
          {
            value: 'outside_business_hours',
            id: 'user.contactComment.outside_business_hours',
          },
        ]}
      />
      <Button type="submit" disabled={submitting}>
        <FormattedMessage id="user.send" tagName="span" />
      </Button>
    </Form>
  )
}

ProjectAccountForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(ProjectAccountForm)
