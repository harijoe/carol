import React, { Component, PropTypes } from 'react'
import { DateField, DatePicker } from 'react-date-picker'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { getCurrentLanguage } from 'utils/locale'
import { Label, Paragraph } from 'components'
import style from './style'

const Wrapper = styled.div`${style}`

class RenderDatePicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
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
    const { label, id, input, dateFormat, placeholder, meta: { touched, error } } = this.props

    return (
      <Wrapper>
        {
          label && <div><Label htmlFor={id} onClick={this.focusDateField}>{label}</Label><br /></div>
        }
        <DateField
          {...input}
          id="birthday"
          dateFormat={dateFormat}
          placeholder={placeholder}
          collapseOnDateClick
          updateOnDateClick
          ref={(node) => { this.dateField = node }}
        >
          <DatePicker
            locale={getCurrentLanguage()}
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
