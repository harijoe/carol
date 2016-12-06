import React from 'react'
import { FormattedMessage } from 'react-intl'

const InputCheckbox = (props) => {
  const { attr, value, text, onChange, checked } = props

  return (
    <div>
      <input
        {...attr}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <FormattedMessage id={text} />
    </div>
  )
}

InputCheckbox.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  value: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
}

export default InputCheckbox
