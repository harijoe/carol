import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

const InputPhone = (props) => {
  const pattern = props.checkPattern ? '^([0|+[0-9]{1,5})?([1-9][0-9]{9})$' : '.*'

  return (
    <input
      {...props.attr}
      placeholder={props.attr.placeholder ? props.intl.formatMessage(messages(props.attr.placeholder).placeholder) : ''}
      type="text"
      pattern={pattern}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

InputPhone.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }),
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  checkPattern: React.PropTypes.bool,
  intl: intlShape.isRequired
}

InputPhone.defaultProps = {
  checkPattern: true
}

export default injectIntl(InputPhone)
