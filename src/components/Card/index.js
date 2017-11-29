import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpoint } from 'utils/style'

import Header from './atoms/Header'
import ImageCard from './molecules/ImageCard'
import Body from './atoms/Body'
import Footer from './atoms/Footer'
import TitleCard from './molecules/TitleCard'
import TagCard from './molecules/TagCard'

const styles = ({ padding, strongShadow, hoverState }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 20.5rem;
  margin: 0;
  background: ${theme('colors.white')};
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
  transition: all 0.3s ease;

  ${breakpoint('m')`
    min-height: 25.5rem;
  `}

  ${ifThen(
    padding === 'fluid-small',
    css`
      .qs-Card {
        &-body, &-header {
          padding: ${theme('spaces.s')};

          ${breakpoint('m')`
            padding: ${theme('spaces.m')};
          `}
        }

        &-footer {
          padding: 0 ${theme('spaces.s')} ${theme('spaces.s')} ${theme('spaces.s')};

          ${breakpoint('m')`
            padding: 0 ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')};
          `}
        }
      }
    `,
  )}

  ${ifThen(
    padding === 'fluid',
    css`
      .qs-Card {
        &-body, &-footer, &-header {
          padding: ${theme('spaces.m')};

          ${breakpoint('m')`
            padding: ${theme('spaces.l')};
          `}
        }

        &-footer {
          padding: 0 ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')};

          ${breakpoint('m')`
            padding: 0 ${theme('spaces.l')} ${theme('spaces.l')} ${theme('spaces.l')};
          `}
        }
      }
    `,
  )}

  ${ifThen(
    padding === 'small',
    css`
      .qs-Card {
        &-body, &-header {
          padding: ${theme('spaces.s')};
        }

        &-footer {
          padding: 0 ${theme('spaces.s')} ${theme('spaces.s')} ${theme('spaces.s')};
        }
      }
    `,
  )}

  ${ifThen(
    padding === 'medium',
    css`
      .qs-Card {
        &-body, &-header {
          padding: ${theme('spaces.m')};
        }

        &-footer {
          padding: 0 ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.m')};
        }
      }
    `,
  )}

  ${ifThen(
    padding === 'large',
    css`
      .qs-Card {
        &-body, &-header {
          padding: ${theme('spaces.l')};
        }

        &-footer {
          padding: 0 ${theme('spaces.l')} ${theme('spaces.l')} ${theme('spaces.l')};
        }
      }
    `,
  )}

  ${ifThen(
    padding === 'xlarge',
    css`
      .qs-Card {
        &-body, &-header {
          padding: ${theme('spaces.l')};

          ${breakpoint('m')`
            padding: ${theme('spaces.xxl')};
          `}
        }

        &-footer {
          padding: 0 ${theme('spaces.l')} ${theme('spaces.l')} ${theme('spaces.l')};

          ${breakpoint('m')`
            padding: 0 ${theme('spaces.xxl')} ${theme('spaces.xxl')} ${theme('spaces.xxl')};
          `}
        }
      }
    `,
  )}

  ${ifThen(strongShadow, css`box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);`)}

  ${ifThen(
    hoverState,
    css`
      &:hover {
        cursor: pointer;
        box-shadow: 2px 8px 10px 0 rgba(19, 19, 19, 0.15), 0 10px 40px 0 rgba(0, 0, 0, .1);
        transform: translateY(-0.4rem);
      }
    `,
  )}
`

const Wrapper = styled.div`${styles};`

const Card = ({ strongShadow, hoverState, children, ...props }) =>
  <Wrapper strongShadow={strongShadow} hoverState={hoverState} {...props}>
    {children}
  </Wrapper>

Card.propTypes = {
  strongShadow: PropTypes.bool,
  hoverState: PropTypes.bool,
  padding: PropTypes.oneOf(['fluid-small', 'fluid', 'small', 'medium', 'large', 'xlarge']),
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  padding: 'fluid',
  strongShadow: false,
  hoverState: true,
}

Card.Header = Header
Card.Image = ImageCard
Card.Body = Body
Card.Title = TitleCard
Card.Tag = TagCard
Card.Footer = Footer

export default Card
