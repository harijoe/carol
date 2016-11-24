import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

const InputPassword = (props) => {
  const pattern =  (props.checkPattern) ? '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' : '.*'

  return (
    <input
      {...props.attr}
      placeholder={props.intl.formatMessage(messages(props.attr.placeholder).placeholder)}
      type="password"
      pattern={pattern}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

InputPassword.propTypes = {
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

InputPassword.defaultProps = {
  checkPattern: true
}

export default injectIntl(InputPassword)
