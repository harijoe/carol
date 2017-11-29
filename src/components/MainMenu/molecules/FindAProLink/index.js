import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Link from 'components/Link'

const FindAProLink = ({ redirectToConversation, className }) =>
  <Link onClick={redirectToConversation} className={className}>
    <FormattedMessage id="firm.find_pro" />
  </Link>

FindAProLink.propTypes = {
  redirectToConversation: PropTypes.func,
  className: PropTypes.string,
}

export default FindAProLink
