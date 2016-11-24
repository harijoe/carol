import React from 'react'
import { FormattedMessage } from 'react-intl'
import { List } from 'immutable'

const FormatError = ({ errors }) => {
  if (!errors.length) {
    return null
  }

  const renderList = () => {
    return errors.map((error, i) => {
      return <FormattedMessage id={error} tagName="p" key={i} />
    })
  }

  return (
    <div>
      {renderList()}
    </div>
  )
}

FormatError.propTypes = {
  errors: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.instanceOf(List)
  ]).isRequired
}

FormatError.defaultProps = {
  errors: []
}

export default FormatError
