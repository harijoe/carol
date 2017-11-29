import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'

const Loading = ({ loading, children }) => {
  const content = loading === true ? <Icon icon="spinner" size={60} /> : children

  return (
    <div>
      {content}
    </div>
  )
}

Loading.propTypes = {
  children: PropTypes.PropTypes.node,
  loading: PropTypes.bool,
}

Loading.defaultProps = {
  loading: false,
}


export default Loading
