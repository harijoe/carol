import React from 'react'
import PropTypes from 'prop-types'
import transformDate from 'utils/transformDate'

const DateTime = ({ value, ...props }) => (
  <time dangerouslySetInnerHTML={{ __html: transformDate(value) }} {...props} />
)

DateTime.propTypes = {
  value: PropTypes.string,
}

export default DateTime
