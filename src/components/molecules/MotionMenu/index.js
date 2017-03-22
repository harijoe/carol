import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import range from 'lodash.range'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, .9);
  border-radius: 100%;
  z-index: 999;
`
const StyledChildIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`
const StyledMainButton = styled.button`
  position: fixed;
  border-radius: 100%;
  background-color: ${theme('colors.primary')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: lighter;
  border: 1px solid rgba(0, 0, 0, 0.1);
  right: 10px;
  z-index: 1002;
  width: 60px;
  height: 60px;
  
  &:focus {
    outline: none;
  }
`
const StyledChildButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  color: #8898A5;
  border: none;
  z-index: 1001;
  
  &:focus {
    outline: none;
  }
`
const mainButtonDiam = 60
const mainButtonMargin = 20
const mainButtonInitialRotation = 0
const mainButtonFinalRotation = 135
const childButtonDiam = 60
const childButtonInitialRotation = -140
const childButtonFinalRotation = 0
const childButtonInitialScale = 0.5
const childButtonFinalScale = 1
const childButtonIcons = ['follow', 'help', 'bot']
const numChildren = childButtonIcons.length
const springConfig = [300, 10]
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
      mainButtonPositionX: window.innerWidth - (mainButtonDiam / 2) - mainButtonMargin,
      mainButtonPositionY: window.innerHeight - (mainButtonDiam / 2) - mainButtonMargin,
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
    window.addEventListener('click', this.closeMenu)
  }

  initialChildButtonStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: childButtonDiam,
      height: childButtonDiam,
      top: spring(mainButtonPositionY - (childButtonDiam / 2), springConfig),
      left: spring(mainButtonPositionX - (childButtonDiam / 2), springConfig),
      rotate: spring(childButtonInitialRotation, springConfig),
      scale: spring(childButtonInitialScale, springConfig),
    }
  }

  initialBackgroundStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: mainButtonDiam,
      height: mainButtonDiam,
      top: spring(mainButtonPositionY - (childButtonDiam / 2), springConfig),
      left: spring(mainButtonPositionX - (childButtonDiam / 2), springConfig),
      scale: spring(0.5, springConfig),
    }
  }

  finalChildButtonStyles(childIndex) {
    const { deltaX, deltaY } = MotionMenu.finalChildDeltaPositions(childIndex)
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: childButtonDiam,
      height: childButtonDiam,
      top: spring(mainButtonPositionY - deltaY, springConfig),
      left: spring(mainButtonPositionX + deltaX, springConfig),
      rotate: spring(childButtonFinalRotation, springConfig),
      scale: spring(childButtonFinalScale, springConfig),
    }
  }

  finalBackgroundStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: mainButtonDiam,
      height: mainButtonDiam,
      top: spring(mainButtonPositionY - (mainButtonDiam / 2), springConfig),
      left: spring(mainButtonPositionX - (mainButtonDiam / 2), springConfig),
      scale: spring(20, springConfig),
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

    return (
      <Motion style={style} key={index}>
        {
          ({ width, height, top, left, rotate, scale }) =>
            <StyledChildButton
              style={{
                width,
                height,
                top,
                left,
                transform: `rotate(${rotate}deg) scale(${scale})`,
              }}
            >
              <StyledChildIcon icon={childButtonIcons[index]} />
            </StyledChildButton>
        }
      </Motion>
    )
  }

  render() {
    const { isOpen, childButtons, mainButtonPositionX, mainButtonPositionY } = this.state
    const mainButtonRotation = isOpen ? { rotate: spring(mainButtonFinalRotation, [500, 30]) } : { rotate: spring(mainButtonInitialRotation, [500, 30]) }
    const style = isOpen ? this.finalBackgroundStyles() : this.initialBackgroundStyles()

    return (
      <div>
        <Motion style={style}>
          {
            ({ width, height, top, left, scale }) =>
              <Background
                isOpen={this.state.isOpen}
                style={{
                  width,
                  height,
                  top,
                  left,
                  transform: `scale(${scale})`,
                }}
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
                <Icon icon="more" />
              </StyledMainButton>
          }
        </Motion>
      </div>
    )
  }
}

export default MotionMenu
