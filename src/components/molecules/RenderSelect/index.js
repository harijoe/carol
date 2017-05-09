import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const RenderSelect = ({ input, options }) => (
  <select {...input}>
    {options.map(({ value, id }, key) => (
      <FormattedMessage {...{ key, id }}>
        {formattedMessage => <option {...{ value }}>{formattedMessage}</option>}
      </FormattedMessage>
    ))}
  </select>
)

RenderSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  input: PropTypes.object,
}

export default RenderSelect
