import React from 'react'
import PropTypes from 'prop-types'

import FirmLight from './molecules/FirmLight'
import FirmFull from './molecules/FirmFull'

const Firm = ({ full, ...props }) => (full ? <FirmFull {...props} /> : <FirmLight {...props} />)

Firm.propTypes = {
  full: PropTypes.bool,
}

export default Firm
