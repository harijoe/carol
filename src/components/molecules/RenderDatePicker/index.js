import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DateField, DatePicker } from 'react-date-picker'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'

import { Label, Paragraph } from 'components'
import style from './style'

const Wrapper = styled.div`
  ${style}
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

  .react-date-field--theme-default, 
  .react-date-field--theme-default.react-date-field--focused {
    border: none;
    transition: all 0.3s ease;
  }

  .react-date-field--theme-default {
    position: relative;
    max-width: 20rem;
    width: 100%;

    /* Input */
    .react-date-field__input {
      flex: none;
      padding: 0 ${theme('spaces.l')} 0 0;
      height: 3.2rem;
      width: 100%;
      font-size: ${theme('fonts.size.base')};
      color: ${theme('colors.grayscale.darker')};
      border-bottom: 0.1rem solid ${theme('colors.grayscale.light')};
    }

    /* Calendar Icon */
    .react-date-field__calendar-icon {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -7px;
      border-color: ${theme('colors.grayscale.dark')};

      .react-date-field__calendar-icon-inner, 
      &::before, &::after {
        background-color: ${theme('colors.grayscale.dark')};
      }
    }

    /* Cross Icon */
    .react-date-field__clear-icon {
      position: absolute;
      right: 3.2rem;
      top: 50%;
      margin-top: -12px;
      color: ${theme('colors.grayscale.dark')};
      fill: ${theme('colors.grayscale.dark')};
    }

    /* Date Picker Box */
    .react-date-field__picker {
      border-color: ${theme('colors.primary')};
    }

    /* Focus State */
    &.react-date-field--focused {
      /* Input */
      .react-date-field__input {
        border-color: ${theme('colors.primary')};
      }

      /* Calendar Icon */
      .react-date-field__calendar-icon {
        border-color: ${theme('colors.primary')};

        .react-date-field__calendar-icon-inner, 
        &::before, &::after {
          background-color: ${theme('colors.primary')};
        }
      }

      /* Cross Icon */
      .react-date-field__clear-icon {
        color: ${theme('colors.primary')};
        fill: ${theme('colors.primary')};
      }
    }
  }  
`

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: ${theme('spaces.s')};
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  line-height: 1rem;
  color: ${theme('colors.black')};
`

class RenderDatePicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    country: PropTypes.string,
    dateFormat: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.shape({
        id: PropTypes.string,
        values: PropTypes.object,
      }),
    }).isRequired,
    input: PropTypes.object,
  }

  constructor() {
    super()

    this.focusDateField = this.focusDateField.bind(this)
  }

  focusDateField() {
    this.dateField.focus()
  }

  render() {
    const { label, id, input, dateFormat, placeholder, meta: { touched, error }, country } = this.props

    return (
      <Wrapper>
        {
          label && <StyledLabel htmlFor={id} onClick={this.focusDateField}>{label}</StyledLabel>
        }
        <DateField
          {...input}
          value={input.value}
          id="birthday"
          dateFormat={dateFormat}
          placeholder={placeholder}
          collapseOnDateClick
          updateOnDateClick
          ref={(node) => { this.dateField = node }}
        >
          <DatePicker
            locale={country}
            highlightWeekends={false}
            highlightToday={false}
            footer={false}
            forceValidDate
            weekDayNames={false}
            weekNumbers={false}
            weekStartDay={1}
          />
        </DateField>
        <Paragraph>{touched && error && <FormattedMessage id={error.id} values={error.values} />}</Paragraph>
      </Wrapper>
    )
  }
}

export default RenderDatePicker
