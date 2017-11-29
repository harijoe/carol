import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin-top: auto;
`

const Footer = ({ className, ...props }) =>
  <Wrapper className={`qs-Card-footer ${className}`} {...props} />

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Footer
