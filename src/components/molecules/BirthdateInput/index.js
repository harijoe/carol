import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import { RenderField } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  legend {
    display: block;
    width: 100%;
    margin-bottom: ${theme('spaces.s')};
  }

  label {
    display: none;
  }

  > div {
    # https://goo.gl/o7tU78
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

    ${breakpointMax('m')`
      width: 100%;
    `} ${breakpoint('m')`
      padding-left: ${theme('spaces.l')};

      &:nth-child(2) {
        padding-left: 0;
        width: 15%;

        input {
          padding-right: 0;
        }
      }

      &:nth-child(3) {
        width: 45%;
      }

      &:last-child {
        width: 25%;

        input {
          padding-right: 0;
        }
      }
    `};
  }
`

const BirthdateInput = ({ translate }) => (
  <Wrapper>
    <legend>
      <strong>
        {translate('form.birthdate-legend')}
      </strong>
    </legend>
    <Field
      name="birthdateDay"
      component={RenderField}
      label={translate('form.birthdate-day')}
      placeholder={translate('form.birthdate-day')}
      type="number"
      pattern="[0-9]*"
      min="1"
      max="31"
    />
    <Field
      name="birthdateMonth"
      component={RenderField}
      label={translate('form.birthdate-month')}
      type="select"
      placeholder={translate('form.birthdate-month')}
    >
      {[
        {
          value: '',
          id: 'form.birthdate-month',
        },
        {
          value: '01',
          id: 'form.months.january',
        },
        {
          value: '02',
          id: 'form.months.february',
        },
        {
          value: '03',
          id: 'form.months.march',
        },
        {
          value: '04',
          id: 'form.months.april',
        },
        {
          value: '05',
          id: 'form.months.may',
        },
        {
          value: '06',
          id: 'form.months.june',
        },
        {
          value: '07',
          id: 'form.months.july',
        },
        {
          value: '08',
          id: 'form.months.august',
        },
        {
          value: '09',
          id: 'form.months.september',
        },
        {
          value: '10',
          id: 'form.months.october',
        },
        {
          value: '11',
          id: 'form.months.november',
        },
        {
          value: '12',
          id: 'form.months.december',
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
    <Field
      name="birthdateYear"
      component={RenderField}
      label={translate('form.birthdate-year')}
      placeholder={translate('form.birthdate-year')}
      type="number"
      pattern="[0-9]*"
      min={(new Date()).getFullYear() - 120} // Maximum age : 120 years old
      max={(new Date()).getFullYear() - 18} // Minimum age : 18 years old
    />
  </Wrapper>)

BirthdateInput.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(BirthdateInput)
