import React from 'react'
import PropTypes from 'prop-types'
import SlickCarousel from 'react-slick'
import styled, { css } from 'styled-components'
import { theme, mapBreakpoints, breakpointMax, breakpoint } from 'utils/style'

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

    &:hover,
    &:focus {
      background: ${theme('colors.primary')};

      &::before {
        color: ${theme('colors.white')};
      }
    }

    &.slick-disabled{
      opacity: 0;
    }

    &.slick-prev{
      ${breakpointMax('xl')`
        left: 2.5rem;
      `}

      &::before {
        content: '←';
      }
    }

    &.slick-next{
      ${breakpointMax('xl')`
        right: 2.5rem;
      `}

      &::before {
        content: '→';
      }
    }
  }
`

const Carousel = class extends React.Component {

  state = {
    removeCarousel: false,
  }

  /*
   When using the `responsive` prop, react-slick messes up server-side-rendering and generated markup is different
   between server and client, forcing us to redraw the carousel on the client
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.ssr && !nextProps.ssr) {
      this.setState({ removeCarousel: true }, () => {
        this.setState({ removeCarousel: false })
      })
    }
  }

  handlePropsOnSSR = ({ responsive = [], ssr }) => {
    if (ssr) return { arrows: false, responsive: [] }

    const touchEnabled = 'ontouchstart' in window

    return { arrows: !touchEnabled, responsive }
  }

  render() {
    const { children, itemProps, responsive, ssr, ...otherProps } = this.props
    const props = { ...this.handlePropsOnSSR({ responsive, ssr }), ...otherProps }
    const { removeCarousel } = this.state

    return (
      <Wrapper>
        {!removeCarousel &&
          <StyledSlickCarousel {...props} >
            {
              children.map((item, i) => (
                <div {...itemProps} key={i}>{item}</div>
              ))
            }
          </StyledSlickCarousel>
        }
      </Wrapper>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  ssr: PropTypes.bool,
  responsive: PropTypes.array,
  itemProps: PropTypes.object,
}

Carousel.defaultProps = {
  itemProps: null,
}

export default Carousel
