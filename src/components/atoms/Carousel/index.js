import React, { PropTypes } from 'react'
import SlickCarousel from 'react-slick'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints } from 'utils/style'

import styles from './styles'

const Wrapper = styled.div`${styles}`

const StyledSlickCarousel = styled(SlickCarousel)`
  overflow-x: hidden;
  overflow-y: visible;
  padding-bottom: ${theme('spaces.m')};

  ${mapBreakpoints(bp => css`
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);

    > .slick-list {
      overflow-y: visible;
      padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
      padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    }

    > .slick-dots {
      bottom: 0;
    }
 `)}
`

const Carousel = ({ children, ...props }) => (
  <Wrapper>
    <StyledSlickCarousel
      {...props}
    >
      {
        children.map((element, i) => (
          <div key={i}>{element}</div>
        ))
      }
    </StyledSlickCarousel>
  </Wrapper>
)

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Carousel
