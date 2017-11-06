import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components'
import styled, { css } from 'styled-components'

import { theme, ifThen, breakpoint } from 'utils/style'

const StyledButton = styled.button`
  ${({ large, block, maxWidth, center, cssDisabled, loading, highlight, state, outline }) => css`
  display: block;
  cursor: pointer;
  margin: ${theme('spaces.m')} 0 0 0;
  padding: ${ifThen(loading, css`${theme('spaces.xs')}`, css`${theme('spaces.m')}`)};
  width: 100%;
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: ${theme('fonts.size.base')};
  letter-spacing: 0.05rem;
  text-align: center;
  transition: all 0.3s ease;
  background-color: ${ifThen(
    loading,
    css`${theme('colors.white')}`,
    css`${ifThen(cssDisabled, css`${theme('colors.grayscale.light')}`, css`${theme('colors.secondary')}`)}`,
  )};
  color: ${theme('colors.black')};
  outline: 0;
  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
    margin-top: ${theme('spaces.l')};
  `}
  ${ifThen(
    large,
    css`
    ${breakpoint('m')`
      padding: ${theme('spaces.l')};
    `}
  `,
  )}
  ${ifThen(block, 'width: 100%')};
  ${ifThen(
    highlight,
    css`
    position: relative;
    margin: 0;
    padding: 0 4px;
    width: auto;
    text-decoration: none;
    font-weight: normal;
    letter-spacing: 0;
    line-height: 1;
    background-color: transparent;
    color: ${theme('colors.black')};
    padding-left: ${theme('spaces.xs')};
    padding-right: ${theme('spaces.xs')};
    box-shadow: inset 0 -0.6rem 0 rgba(51, 51, 254, 0.2);
    transition: all 0.3s ease;

    &:hover {
      color: ${theme('colors.white')};
      box-shadow: inset 0 -6rem 0 rgba(51, 51, 254, 1);
    }

    ${breakpoint('m')`
      margin: 0;
      padding: 0 4px;
    `}
  `,
  )};
  ${ifThen(
    maxWidth,
    css`
    ${breakpoint('m')`
      max-width: 32rem;
    `}
  `,
  )};
  ${ifThen(
    center,
    css`
    margin-left: auto;
    margin-right: auto;
  `,
  )};

  ${ifThen(
    state === 'primary',
    css`
      background-color: ${theme('colors.button.primary')};
      color: ${theme('colors.black')};

      &:hover {
        background-color: ${theme('colors.button.primaryHover')};
      }
    `,
  )};

  ${ifThen(
    state === 'secondary',
    css`
      background-color: ${theme('colors.button.secondary')};
      color: ${theme('colors.white')};

      &:hover {
        background-color: ${theme('colors.button.secondaryHover')};
      }

      ${ifThen(
        outline,
        css`
          border-color: ${theme('colors.button.secondary')};
          color: ${theme('colors.button.secondary')};

          &:hover {
            border-color: ${theme('colors.button.secondaryHover')};
            color: ${theme('colors.button.secondaryHover')};
          }
        `,
      )}
    `,
  )};

  ${ifThen(
    state === 'third',
    css`
      background-color: transparent;
      color: ${theme('colors.grayscale.dark')};

      &:hover {
        color: ${theme('colors.grayscale.darker')};
      }

      ${ifThen(
        outline,
        css`
          border-color: ${theme('colors.grayscale.medium')};

          &:hover {
            border-color: ${theme('colors.grayscale.dark')};
          }
        `,
      )}
    `,
  )};

  ${ifThen(
    outline,
    css`
      background-color: transparent;
      border-width: 2px;
      border-style: solid;

      &:hover {
        background-color: transparent;
      }
    `,
  )};

  ${ifThen(loading,
    css`
      background-color: transparent;
      border: 1px solid ${theme('colors.secondary')};
    `,
  )}

`};
`

const Button = ({ type, children, loading, disabled, highlight, state, outline, ...props }) => {
  const loadingButton = <Icon icon="spinner" size={55} />
  const actualChildren = loading && !highlight ? loadingButton : children
  const actualDisabled = loading || disabled

  return (
    <StyledButton
      {...{ ...props, state, outline, highlight, loading, cssDisabled: disabled, children: actualChildren, disabled: actualDisabled }}
      type={type}
    />
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  state: PropTypes.oneOf(['primary', 'secondary', 'third']),
  maxWidth: PropTypes.bool,
  children: PropTypes.any,
  center: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  highlight: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
  outline: false,
  state: 'primary',
}

export default Button
