import React, { PropTypes } from 'react'
import SlickCarousel from 'react-slick'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints, breakpoint } from 'utils/style'

import styles from './styles'

const Wrapper = styled.div`${styles}`

const StyledSlickCarousel = styled(SlickCarousel)`
  padding-bottom: ${theme('spaces.m')};

  ${breakpoint('xs')`
    overflow: hidden;
  `}

  ${breakpoint('m')`
    overflow: visible;
  `}

  ${mapBreakpoints(bp => css`
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);

    > .slick-list {
      padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
      padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    }
 `)}

  > .slick-dots {
    bottom: 0;
    left: 0;
  }

  .slick-arrow {
    z-index: 5;
    height: ${theme('icons.size.xxxl')};
    width: ${theme('icons.size.xxxl')};
    background: ${theme('colors.white')};
    border-radius: 60rem;
    box-shadow: 0 0 10px rgba(19, 19, 19, 0.1);
    transition: all 0.3s ease;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${theme('fonts.size.xl')};
      color: ${theme('colors.primary')};
      opacity: 1;
      transition: color 0.3s ease;
    }

    &:hover, &:focus {
      background: ${theme('colors.primary')};

      &::before {
        color: ${theme('colors.white')};
      }
    }

    &.slick-disabled{
      opacity: 0;
    }

    &.slick-prev::before {
      content: '←';
    }

    &.slick-next::before {
      content: '→';
    }
  }
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
