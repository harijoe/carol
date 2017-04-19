import React, { PropTypes } from 'react'
import transformDate from 'utils/transformDate'

const DateTime = ({ value, ...props }) => (
  <time dangerouslySetInnerHTML={{ __html: transformDate(value) }} {...props} />
)

DateTime.propTypes = {
  value: PropTypes.string,
}

export default DateTime
