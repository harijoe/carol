import React, { PropTypes } from 'react'

const DateTime = ({ value, ...props }) => {
  const date = new Date(value)

  return (
    <time dangerouslySetInnerHTML={{ __html: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` }} {...props} />
  )
}

DateTime.propTypes = {
  value: PropTypes.string,
}

export default DateTime
