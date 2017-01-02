import React, { PropTypes } from 'react'

const Image = ({ link, ...props }) => <img alt="" src={link} {...props} />

Image.propTypes = {
  link: PropTypes.string,
}

export default Image
