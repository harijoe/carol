import React from 'react'

const DateTime = ({ value, ...props }) => <time dangerouslySetInnerHTML={{ __html: value }} {...props} />

export default DateTime
