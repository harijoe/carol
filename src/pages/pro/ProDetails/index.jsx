import React from 'react'

const ProDetails = (props) => {
  return (
    <div>
      Pro details {props.params.proId}
    </div>
  )
}

ProDetails.propTypes = {
  params: React.PropTypes.object
}

export default ProDetails
