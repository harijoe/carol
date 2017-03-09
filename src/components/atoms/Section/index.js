import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family: 'montserrat-bold', sans-serif;
`

const Section = ({ children, title }) => (
  <section>
    {title != null && <Title>{title}</Title>}
    {children}
  </section>
)
Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}

export default Section
