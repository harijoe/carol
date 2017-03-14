import React, { PropTypes } from 'react'
import SlickCarousel from 'react-slick'
import styled from 'styled-components'

import styles from './styles'

const Wrapper = styled.div`${styles}`

const Carousel = ({ children }) => (
  <Wrapper>
    <SlickCarousel
      dots
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      draggable
    >
      {
        children.map((element, i) => (
          <div key={i}>{element}</div>
        ))
      }
    </SlickCarousel>
  </Wrapper>
)

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Carousel
