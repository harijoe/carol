import React, { PropTypes } from 'react'

const DateTime = ({ value, ...props }) => <time dangerouslySetInnerHTML={{ __html: value }} {...props} />

DateTime.propTypes = {
  value: PropTypes.string,
}

export default DateTime
