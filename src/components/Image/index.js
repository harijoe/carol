import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Image.defaultProps = {
  alt: '',
}

export default Image
