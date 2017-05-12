import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import range from 'lodash.range'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

import { Icon, Link } from 'components'

const Background = styled.div`
  position: fixed;
  transition: background-color 0.3s ${props => props.isOpen ? 'ease' : 'ease-out'};
  ${props => props.isOpen ? 'background-color: rgba(0, 0, 0, 0.9);' : ''}
  border-radius: 100%;
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 19;
`

const StyledMainIcon = styled(Icon)`
  margin: 0 auto;
`

const StyledChildIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 0 auto;
`

const StyledMainButton = styled.button`
  cursor: pointer;
  position: fixed;
  border-radius: 100%;
  background-color: ${theme('colors.primary')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme('colors.white')};
  font-weight: lighter;
  border: 1px solid rgba(0, 0, 0, 0.1);
  right: 10px;
  z-index: 2;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);

  &:focus {
    outline: none;
  }
`

const childButtonCss = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
  color: #8898a5;
  border: none;
  z-index: 1;

  &:focus {
    outline: none;
  }
`
const backgroundInitialScale = 0.5
const backgroundFinalScale = 40
const StyledChildLink = styled(Link)(childButtonCss)
const StyledChildButton = styled.button(childButtonCss)
const mainButtonDiam = 60
const mainButtonMargin = 20
const mainButtonInitialRotation = 0
const mainButtonFinalRotation = 135
const childButtonDiam = 60
const childButtonInitialRotation = -140
const childButtonFinalRotation = 0
const childButtonInitialScale = 0.5
const childButtonFinalScale = 1
const childButtonIcons = [
  {
    type: 'springBar',
    element: {
      icon: 'follow',
    },
  },
  {
    type: 'link',
    element: {
      icon: 'bot',
      url: '/project-elaboration',
      style: {
        width: '100%',
        height: '100%',
      },
    },
  },
  {
    type: 'link',
    element: {
      icon: 'help',
      url: '/help',
    },
  },
]
const numChildren = childButtonIcons.length
const childButtonSpringConfig = { stiffness: 300, damping: 20, precision: 50 }
const backgroundSpringConfig = { stiffness: 200, damping: 20, precision: 10 }
const flyOutRadius = 100 // distance between main button and child button
const separationAngle = 45 // degrees
const baseAngle = 90 // degrees
const childButtonAnimationDelay = 50

class MotionMenu extends Component {
  static toRadians(degrees) {
    return degrees * 0.0174533
  }

  static finalChildDeltaPositions(index) {
    const angle = baseAngle + (index * separationAngle)

    return {
      deltaX: (flyOutRadius * Math.cos(MotionMenu.toRadians(angle))) - (childButtonDiam / 2),
      deltaY: (flyOutRadius * Math.sin(MotionMenu.toRadians(angle))) + (childButtonDiam / 2),
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      childButtons: [],
      ...this.recalculatePosition(),
    }
  }

  componentWillMount() {
    const childButtons = []

    range(numChildren).forEach((index) => {
      childButtons.push(this.renderChildButton(index))
    })

    this.setState({ childButtons: childButtons.slice(0) })
  }

  componentDidMount() {
    window.addEventListener('resize', this.refreshPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.refreshPosition)
  }

  recalculatePosition = () => ({
    mainButtonPositionX: window.innerWidth - (mainButtonDiam / 2) - mainButtonMargin,
    mainButtonPositionY: window.innerHeight - (mainButtonDiam / 2) - mainButtonMargin,
    backgroundPositionX: window.innerWidth,
    backgroundPositionY: window.innerHeight,
  })

  refreshPosition = () => this.setState(this.recalculatePosition(), this.animateChildButtonsWithDelay)

  initialChildButtonStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: childButtonDiam,
      height: childButtonDiam,
      top: spring(mainButtonPositionY - (childButtonDiam / 2), childButtonSpringConfig),
      left: spring(mainButtonPositionX - (childButtonDiam / 2), childButtonSpringConfig),
      rotate: spring(childButtonInitialRotation, childButtonSpringConfig),
      scale: spring(childButtonInitialScale, childButtonSpringConfig),
    }
  }

  finalChildButtonStyles(childIndex) {
    const { deltaX, deltaY } = MotionMenu.finalChildDeltaPositions(childIndex)
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: childButtonDiam,
      height: childButtonDiam,
      top: spring(mainButtonPositionY - deltaY, childButtonSpringConfig),
      left: spring(mainButtonPositionX + deltaX, childButtonSpringConfig),
      rotate: spring(childButtonFinalRotation, childButtonSpringConfig),
      scale: spring(childButtonFinalScale, childButtonSpringConfig),
    }
  }

  initialBackgroundStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: mainButtonDiam,
      height: mainButtonDiam,
      top: spring(mainButtonPositionY - (childButtonDiam / 2), childButtonSpringConfig),
      left: spring(mainButtonPositionX - (childButtonDiam / 2), childButtonSpringConfig),
      scale: spring(backgroundInitialScale, backgroundSpringConfig),
    }
  }

  finalBackgroundStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: mainButtonDiam,
      height: mainButtonDiam,
      top: spring(mainButtonPositionY - (mainButtonDiam / 2), childButtonSpringConfig),
      left: spring(mainButtonPositionX - (mainButtonDiam / 2), childButtonSpringConfig),
      scale: spring(backgroundFinalScale, backgroundSpringConfig),
    }
  }

  animateChildButtonsWithDelay() {
    const { childButtons } = this.state

    range(numChildren).forEach((index) => {
      setTimeout(() => {
        childButtons[numChildren - index - 1] = this.renderChildButton(numChildren - index - 1)
        this.setState({ childButtons: childButtons.slice(0) })
      }, index * childButtonAnimationDelay)
    })
  }

  toggleMenu = (e) => {
    const { isOpen } = this.state

    e.stopPropagation()

    this.setState({
      isOpen: !isOpen,
    })

    this.animateChildButtonsWithDelay()
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
    this.animateChildButtonsWithDelay()
  }

  renderChildButton(index) {
    const { isOpen } = this.state
    const style = isOpen ? this.finalChildButtonStyles(index) : this.initialChildButtonStyles()
    const childButton = (type, element, elementStyle) => {
      switch (type) {
        case 'link':
          return (
            <StyledChildLink
              to={element.url}
              style={elementStyle}
            >
              <StyledChildIcon
                icon={element.icon}
                style={element.style}
              />
            </StyledChildLink>
          )
        case 'springBar':
          return (
            <StyledChildButton
              style={elementStyle}
            >
              <StyledChildIcon
                icon={element.icon}
                style={element.style}
              />
            </StyledChildButton>
          )
        default:
          return ''
      }
    }

    return (
      <Motion style={style} key={index}>
        {
          ({ width, height, top, left, rotate, scale }) =>
          childButton(
            childButtonIcons[index].type,
            childButtonIcons[index].element,
            {
              width,
              height,
              top,
              left,
              transform: `rotate(${rotate}deg) scale(${scale})`,
            }
          )
        }
      </Motion>
    )
  }

  render() {
    const { isOpen, childButtons, mainButtonPositionX, mainButtonPositionY } = this.state
    const mainButtonRotation = isOpen ? { rotate: spring(mainButtonFinalRotation, [500, 30]) } : { rotate: spring(mainButtonInitialRotation, [500, 30]) }
    const style = isOpen ? this.finalBackgroundStyles() : this.initialBackgroundStyles()

    return (
      <Wrapper isOpen={this.state.isOpen}>
        <Motion style={style}>
          {
            ({ width, height, scale }) =>
              <Background
                isOpen={this.state.isOpen}
                style={{
                  width,
                  height,
                  top: this.state.backgroundPositionY,
                  left: this.state.backgroundPositionX,
                  transform: `scale(${scale})`,
                }}
                onClick={this.closeMenu}
              />
            }

        </Motion>
        {
          childButtons.map((button, index) => (
            childButtons[index]
          ))
        }
        <Motion style={mainButtonRotation}>
          {
            ({ rotate }) =>
              <StyledMainButton
                style={{
                  top: mainButtonPositionY - (mainButtonDiam / 2),
                  left: mainButtonPositionX - (mainButtonDiam / 2),
                  transform: `rotate(${rotate}deg) `,
                }}
                onClick={this.toggleMenu}
              >
                <StyledMainIcon icon="more" />
              </StyledMainButton>
          }
        </Motion>
      </Wrapper>
    )
  }
}

export default MotionMenu
