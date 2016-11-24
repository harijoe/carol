import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

const InputEmail = (props) => {
  const pattern = (props.checkPattern) ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$' : '.*'

  return (
    <input
      {...props.attr}
      placeholder={props.intl.formatMessage(messages.placeholder)}
      type="email"
      pattern={pattern}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

InputEmail.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }),
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  checkPattern: React.PropTypes.bool,
  intl: intlShape.isRequired
}

InputEmail.defaultProps = {
  checkPattern: true
}

export default injectIntl(InputEmail)
