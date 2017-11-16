import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen, breakpointMax } from 'utils/style'
import flatten from 'lodash/flatten'

const Wrapper = styled.div`
  position: relative;
  margin: 0;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('m')`
    display: none;
  `}

  ${breakpointMax('m')`
    li {
      position: relative;
      border-bottom: 2px solid ${theme('colors.black')};

      &::after {
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -0.25rem;
        width: 0;
        height: 0;
        border-left: 0.5rem solid rgba(0, 0, 0, 0);
        border-right: 0.5rem solid rgba(0, 0, 0, 0);
        border-top: 0.5rem solid ${theme('colors.black')};
        content: '';
      }
    }
  `}
`

const WrapperList = styled.ul`${({ expanded }) => css`
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 0.3s linear, height 0.2s linear, opacity 0.1s linear;
  transform-origin: center top;

  ${breakpointMax('m')`
    ${ifThen(expanded,
      css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        display: block;
        height: auto;
        width: calc(100% + 1.6rem);
        margin: 0 -${theme('spaces.s')};
        padding: 0 ${theme('spaces.m')};
        opacity: 1;
        background-color: ${theme('colors.white')};
        box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
        pointer-events: auto;
        transform: translateY(-50px) scaleY(1);
      `,
      css`
        height: 0;
        opacity: 0;
        transform: translateY(0) scaleY(0);
        pointer-events: none;
      `
    )}
  `}

  ${breakpoint('m')`
    display: flex;
  `}

  li {
    ${breakpoint('m')`
      padding-left: ${theme('spaces.l')};

      &:first-child {
        padding-left: 0;
      }
    `}
  }
`};`

class MobileSelector extends Component {
  static propTypes = {
    children: PropTypes.array,
    selected: PropTypes.string,
  }
  state = {
    expanded: false,
  }

  toggle = () => this.setState({ expanded: !this.state.expanded })
  contract = () => this.setState({ expanded: false })

  render() {
    const selected = flatten(this.props.children).find(({ key }) => (key === this.props.selected || (key === 'all' && !this.props.selected)))
    return (
      <Wrapper>
        <List onClickCapture={e => {
            e.stopPropagation()
            this.toggle()
          }}
        >
          {selected}
        </List>
        <WrapperList expanded={this.state.expanded} onClick={() => this.contract()}>{flatten(this.props.children)}</WrapperList>
      </Wrapper>
    )
  }
}

export default MobileSelector
