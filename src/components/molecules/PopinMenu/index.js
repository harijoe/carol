import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { List, ListItem } from 'components'
import theme from '../../themes/default'

const transitionTime = 200
const Background = styled.div`
  display: ${props => props.display ? 'block' : 'none'};
  position: fixed;
  z-index: 3;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const StyledButton = styled.button`
  background: inherit;
  z-index: 4;
  position: relative;

  &:focus {
    outline: none;
  }
`

const Menu = styled.div`
  transition: opacity ${transitionTime / 1000}s linear;
  opacity: ${props => props.display ? '1' : '0'};
  position: absolute;
  z-index: 5;
  background-color: ${theme.colors.white};
  bottom: 5rem;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
`

const StyledList = styled(List)`
  margin: 0;
  padding: ${theme.spaces.s} ${theme.spaces.m};
  list-style: none;
  display: ${props => props.active ? 'block' : 'none'};
`

const StyledItem = styled(ListItem)`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${theme.colors.grayscale.light};

  &:last-child {
    border-bottom: none;
  }
`

class PopinMenu extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    menu: PropTypes.array.isRequired,
  }

  state = {
    display: false,
    active: false,
  }

  disableMenu = () => {
    setTimeout(() => {
      this.setState({ active: false })
    }, transitionTime)
  }

  toggle = () => {
    this.setState({ display: !this.state.display })

    if (this.state.active === false) {
      this.setState({ active: true })
    } else {
      this.disableMenu()
    }
  }

  hide = () => {
    this.setState({ display: false })

    this.disableMenu()
  }

  render() {
    const { menu, children } = this.props

    return (
      <div>
        <Background display={this.state.display} onClick={this.hide} />
        <Menu display={this.state.display}>
          <StyledList active={this.state.active}>
            {
              menu.map((element, i) => (
                <StyledItem
                  key={i}
                  onClick={this.hide}
                >
                  {element}
                </StyledItem>
              ))
            }
          </StyledList>
        </Menu>
        <StyledButton type="button" onClick={this.toggle}>
          {children}
        </StyledButton>
      </div>
    )
  }
}

export default PopinMenu
