import React from 'react'

const Image = ({ link, ...props }) => <img alt="image" src={link} {...props} />

export default Image
