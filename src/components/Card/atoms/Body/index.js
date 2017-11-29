import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.article`
  position: relative;
  flex-grow: 1;
  margin: 0;
`

const Body = ({ className, ...props }) =>
  <Wrapper className={`qs-Card-body ${className}`} {...props} />

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Body
