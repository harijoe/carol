import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'

import Link from 'components/Link'

const StyledSubmenu = styled.ul`
  ${({ isOpen }) => css`
  list-style: none;
  z-index: 1;

  ${breakpointMax('l')`
    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: height 0.3s 0.6s ease, opacity 0.3s ease;
  `}

  ${breakpoint('l')`
    position: absolute;
    left: 50%;
    top: 5.2rem;
    margin-left: -11rem;
    padding: ${theme('spaces.l')};
    width: 22rem;
    background: ${theme('colors.white')};
    border-top: 0.2rem solid ${theme('colors.primary')};
    box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, .15);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    

    &::before {
      position: absolute;
      left: 50%;
      top: -0.5rem;
      margin-left: -0.25rem;
      width: 0; 
      height: 0; 
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 0.5rem solid ${theme('colors.primary')};
      content: '';
    }
  `}

  li {
    padding-bottom: calc(${theme('spaces.m')} / 2);
    padding-top: calc(${theme('spaces.m')} / 2);

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    ${breakpoint('l')`
      padding-bottom: calc(${theme('spaces.l')} / 2);
      padding-top: calc(${theme('spaces.l')} / 2);
    `}
  }

  ${ifThen(
    !isOpen,
    '',
    css`
    ${breakpointMax('l')`
      height: auto;
      opacity: 1;
      pointer-events: auto;
    `}

    ${breakpoint('l')`
      opacity: 1;
      pointer-events: auto;
    `}
  `,
  )};
`};
`

const HitBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  ${breakpointMax('l')`
    display: none;
  `};
`

const StyledLink = styled(Link)`${({ linkStyle }) => css`
  ${linkStyle}
`}`

class ListItemWithSubmenu extends Component {
  state = {
    isOpen: false,
  }

  toggleState = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { id, homepage, children, linkStyle } = this.props
    const { isOpen } = this.state

    return (
      <li>
        {isOpen && <HitBox onClick={this.toggleState} />}
        <StyledLink onClick={this.toggleState} className="qs-linkMenu--toggle" homepage={homepage} isOpen={isOpen} linkStyle={linkStyle}>
          <FormattedMessage id={id} />
        </StyledLink>
        <StyledSubmenu isOpen={isOpen}>
          {children}
        </StyledSubmenu>
      </li>
    )
  }
}

ListItemWithSubmenu.propTypes = {
  id: PropTypes.string,
  homepage: PropTypes.bool,
  children: PropTypes.any,
  linkStyle: PropTypes.any,
}

export default ListItemWithSubmenu
