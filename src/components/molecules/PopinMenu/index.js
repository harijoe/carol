import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { List, ListItem } from 'components'
import theme from '../../themes/default'

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
  border: none;
  z-index: 4;
  position: relative;

  &:focus {
    outline: none;
  }
`

const Menu = styled.div`
  transition: visibility 0.2s, opacity 0.2s linear;
  opacity: ${props => props.display ? '1' : '0'};
  position: absolute;
  z-index: 5;
  background-color: ${theme.colors.white};
  bottom: 50px;
  box-shadow: 0 0 40px 0 rgba(19, 19, 19, 0.2);
`

const StyledList = styled(List)`
  padding: 0 20px;
  list-style: none;
`

const StyledItem = styled(ListItem)`
  padding: 0;
  border-bottom: 1px solid ${theme.colors.grayscale.medium};

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
  }

  toggle = () => {
    this.setState({ display: !this.state.display })
  }

  hide = () => {
    this.setState({ display: false })
  }

  render() {
    const { menu, children } = this.props

    return (
      <div>
        <Background display={this.state.display} onClick={this.hide} />
        <Menu display={this.state.display}>
          <StyledList>
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
