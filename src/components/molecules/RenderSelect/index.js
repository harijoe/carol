import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class RenderSelect extends Component {
  componentDidMount() {
    if (!this.props.input.value) {
      this.props.input.onChange(this.props.options[0].value)
    }
  }

  render() {
    const { options, input } = this.props

    return (
      <select {...input}>
        {options.map(({ value, id }, key) => (
          <FormattedMessage {...{ key, id }}>
            {formattedMessage => <option {...{ value }}>{formattedMessage}</option>}
          </FormattedMessage>
        ))}
      </select>
    )
  }
}

RenderSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  input: PropTypes.object,
}

export default RenderSelect
