import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ link, ...props }) => <img alt="" src={link} {...props} />

Image.propTypes = {
  link: PropTypes.string,
}

export default Image
