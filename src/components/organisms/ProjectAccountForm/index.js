import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import { RenderField, Button, Section, RadioGroup } from 'components'

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  ${breakpoint('m')`
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
  `}
`

const RadioBlock = styled.div`
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

  strong {
    display: block;
    margin-bottom: ${theme('spaces.m')};
    font-family: ${theme('fonts.family.montserratBold')};
    font-size: ${theme('fonts.size.base')};
    line-height: 1rem;
    color: ${theme('colors.black')};
  }

  fieldset {
    display: inline-block;
    margin: 0;
    margin-right: ${theme('spaces.xl')};
    padding: 0;
    border: none;
    outline: none;
  }
`

const StyledSection = styled(Section)`
  &:not(:first-child) {
    padding-top: 0;
  }
`
const StyledButton = styled(Button)`
  margin-bottom: 0;
  margin-top: 0;
`

const ProjectAccountForm = ({ handleSubmit, loading, intl: { formatMessage } }) => (
  <Form onSubmit={handleSubmit}>
    <StyledSection title={formatMessage(messages('auto-validation.title.informations').label)}>
      <RadioBlock>
        <strong><FormattedMessage id="user.gender" tagName="div" /></strong>
        <Field
          component={RadioGroup}
          name="gender" required
          options={[
            { value: 'Mr', id: 'mr', translation: 'user.mr' },
            { value: 'Mrs', id: 'mrs', translation: 'user.mrs' },
          ]}
        />
      </RadioBlock>
      <Field
        name="firstName"
        component={RenderField}
        label={formatMessage(messages('user.first_name').label)}
        placeholder={formatMessage(messages('user.first_name').label)}
        icon="login"
      />
      <Field
        name="lastName"
        component={RenderField}
        label={formatMessage(messages('user.last_name').label)}
        placeholder={formatMessage(messages('user.last_name').label)}
        icon="login"
      />
    </StyledSection>
    <StyledSection title={formatMessage(messages('auto-validation.title.contact_preferences').label)}>
      <RadioBlock>
        <strong><FormattedMessage id="user.contactPreference" tagName="div" /></strong>
        <Field
          component={RadioGroup}
          name="contactPreference"
          required
          options={[
            { value: 'email', id: 'email', translation: 'user.contactPreference.email' },
            { value: 'phone', id: 'phone', translation: 'user.contactPreference.phone' },
          ]}
        />
      </RadioBlock>
      <Field
        name="contactComment"
        component={RenderField}
        type="select"
        label={formatMessage(messages('user.contactComment').label)}
      >
        {[
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
        ].map(({ value, id }, key) => (
          <FormattedMessage {...{ key, id }}>
            {formattedMessage => <option {...{ value }}>{formattedMessage}</option>}
          </FormattedMessage>
        ))}
      </Field>
    </StyledSection>
    <StyledSection title={formatMessage(messages('auto-validation.title.project').label)}>
      <Field
        name="startTimeframe"
        component={RenderField}
        type="select"
        label={formatMessage(messages('project.startTimeframe').label)}
      >
        {[
          {
            value: '',
            id: 'choose',
          },
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
        ].map(({ value, id }, key) => (
          <FormattedMessage {...{ key, id }}>
            {formattedMessage => <option {...{ value }}>{formattedMessage}</option>}
          </FormattedMessage>
        ))}
      </Field>
      <Field
        name="purpose"
        component={RenderField}
        type="select"
        label={formatMessage(messages('project.purpose').label)}
      >
        {[
          {
            value: '',
            id: 'choose',
          },
          {
            value: 'find_a_pro',
            id: 'project.find_a_pro',
          },
          {
            value: 'quotation',
            id: 'project.quotation',
          },
        ].map(({ value, id }, key) => (
          <FormattedMessage {...{ key, id }}>
            {formattedMessage => <option {...{ value }}>{formattedMessage}</option>}
          </FormattedMessage>
        ))}
      </Field>
    </StyledSection>
    <StyledSection>
      <StyledButton type="submit" center loading={loading} >
        <FormattedMessage id="user.send" tagName="span" />
      </StyledButton>
    </StyledSection>
  </Form>
)

ProjectAccountForm.propTypes = {
  handleSubmit: PropTypes.func,
  intl: intlShape.isRequired,
  loading: PropTypes.bool,
}

export default injectIntl(ProjectAccountForm)
