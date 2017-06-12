import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Icon } from 'components'

const ValidatedInfo = ({ validated, field }) => {
  const validateState = validated ? 'validated' : 'to_validate'

  return (
    <div>
      <Icon icon={validateState} size={50} />
      <FormattedMessage id={`user.profile.${field}.${validateState}`} />
    </div>
  )
}

ValidatedInfo.propTypes = {
  validated: PropTypes.bool.isRequired,
  field: PropTypes.string.isRequired,
}

export default ValidatedInfo
