import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { DateField } from 'react-date-picker'
import './datepicker.scss'
import messages from '../../utils/messages'

class Datepicker extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.props.onChange({
      target: {
        name: this.props.attr.name,
        value: date,
      }
    })
  }

  render() {
    return (
      <DateField
        {...this.props.attr}
        placeholder={this.props.attr.placeholder ? this.props.intl.formatMessage(messages(this.props.attr.placeholder).label) : ''}
        dateFormat={this.props.dateFormat}
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

Datepicker.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  dateFormat: React.PropTypes.string.isRequired,
}

export default injectIntl(Datepicker)
