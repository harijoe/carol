import React from 'react'

const Img = (props) => {
  return (
    <img
      {...props}
      alt={props.alt}
    />
  )
}

Img.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  alt: React.PropTypes.string,
  src: React.PropTypes.string
}

export default Img
