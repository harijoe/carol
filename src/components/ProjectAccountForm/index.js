import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import RenderField from 'components/RenderField'
import Button from 'components/Button'
import Section from 'components/Section'
import RadioGroup from 'components/RadioGroup'
import GenderBlock from 'containers/GenderBlock'

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  ${breakpoint('m')`
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
  `};
`

const RadioBlock = styled.div`
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

  strong {
    display: block;
    margin-bottom: ${theme('spaces.m')};
    font-weight: bold;
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
  padding-right: 0;
  padding-left: 0;

  &:not(:first-child) {
    padding-top: 0;
  }
`
const StyledButton = styled(Button)`
  margin-bottom: 0;
  margin-top: 0;
`

class ProjectAccountForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    translate: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    invalid: PropTypes.bool,
    initialValues: PropTypes.shape({
      gender: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }

  handleSubmitClick = () => {
    if (this.props.invalid) {
      this.form.scrollIntoView()
    }
  }

  render() {
    const { handleSubmit, loading, translate, initialValues: { gender, firstName, lastName } } = this.props

    const askPersonalInfo = [gender, firstName, lastName].some(field => !field)

    return (
      <div
        ref={ref => {
          this.form = ref
        }}
      >
        <Form onSubmit={handleSubmit}>
          <StyledSection title={translate('auto-validation.title.project')}>
            <Field name="startTimeframe" component={RenderField} type="select" label={translate('project.startTimeframe')}>
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
              ].map(({ value, id }, key) =>
                <FormattedMessage {...{ key, id }}>
                  {formattedMessage =>
                    <option {...{ value }}>
                      {formattedMessage}
                    </option>}
                </FormattedMessage>,
              )}
            </Field>
            <Field name="purpose" component={RenderField} type="select" label={translate('project.purpose')}>
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
              ].map(({ value, id }, key) =>
                <FormattedMessage {...{ key, id }}>
                  {formattedMessage =>
                    <option {...{ value }}>
                      {formattedMessage}
                    </option>}
                </FormattedMessage>,
              )}
            </Field>
          </StyledSection>
          <StyledSection title={translate('auto-validation.title.contact_preferences')}>
            <RadioBlock>
              <strong>
                <FormattedMessage id="user.contactPreference" tagName="div" />
              </strong>
              <Field
                component={RadioGroup}
                name="contactPreference"
                required
                options={[
                  { value: 'email', id: 'contactPreference.email', translation: 'user.contactPreference.email' },
                  { value: 'phone', id: 'contactPreference.phone', translation: 'user.contactPreference.phone' },
                ]}
              />
            </RadioBlock>
            <Field name="contactComment" component={RenderField} type="select" label={translate('user.contactComment')}>
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
              ].map(({ value, id }, key) =>
                <FormattedMessage {...{ key, id }}>
                  {formattedMessage =>
                    <option {...{ value }}>
                      {formattedMessage}
                    </option>}
                </FormattedMessage>,
              )}
            </Field>
          </StyledSection>
          {askPersonalInfo &&
            <StyledSection title={translate('auto-validation.title.informations')}>
              <GenderBlock />
              <Field
                name="firstName"
                component={RenderField}
                label={translate('user.first_name')}
                placeholder={translate('user.first_name')}
                icon="login"
              />
              <Field
                name="lastName"
                component={RenderField}
                label={translate('user.last_name')}
                placeholder={translate('user.last_name')}
                icon="login"
              />
            </StyledSection>}
          <StyledSection>
            <StyledButton type="submit" center loading={loading} onClick={this.handleSubmitClick}>
              <FormattedMessage id="user.send" tagName="span" />
            </StyledButton>
          </StyledSection>
        </Form>
      </div>
    )
  }
}

export default injectTranslate(ProjectAccountForm)
