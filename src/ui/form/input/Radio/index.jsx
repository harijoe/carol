import React from 'react'
import { FormattedMessage } from 'react-intl'

const InputRadio = (props) => {
  const { attr, value, text, onChange, checked } = props
  const  translatedText = <FormattedMessage id={text} />

  return (
    <div>
      <input
        {...attr}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {translatedText}
    </div>
  )
}

InputRadio.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  value: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
}

export default InputRadio
