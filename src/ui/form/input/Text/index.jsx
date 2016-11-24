import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

const InputText = (props) => {
  return (
    <input
      {...props.attr}
      placeholder={props.attr.placeholder ? props.intl.formatMessage(messages(props.attr.placeholder).placeholder) : ''}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  )
}

InputText.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(InputText)
