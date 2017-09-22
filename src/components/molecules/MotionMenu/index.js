import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import range from 'lodash/range'
import styled, { css } from 'styled-components'
import { theme, ifThen } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { Icon, Link, BouncingBall } from 'components'
import Tooltip from './molecules/Tooltip'

export const Background = styled.div`${({ isOpen }) => css`
  position: fixed;
  transition: background-color 0.3s ${ifThen(isOpen, 'ease', 'ease-out')};
  ${ifThen(isOpen, 'background-color: rgba(255, 255, 255, 0.98);')}
  border-radius: 100%;
`}`

const Wrapper = styled.div`
  position: fixed;
  z-index: 21;
  top: 0;

  > a {
    font-weight: bold;
  }
`

const StyledMainIcon = styled(Icon)`
  position: relative;

  svg path {
    fill: #FFFFFF; 
  }
`

const StyledChildIcon = styled(Icon)`${({ dot, size }) => css`
  position: relative;
  width: ${size ? `${size / 16}rem` : '1em'};
  height: ${size ? `${size / 16}rem` : '1em'};

  &::after {
    content: '';
    position: absolute;
    right: -1.4rem;
    top: -1.4rem;
    width: 14.4px;
    height: 14.4px;
    background-color: ${theme('colors.secondary')};
    border-radius: 100%;
    ${ifThen(!dot, 'display: none;')}
  }  
`}`

const MainWrapper = styled.div`
  position: relative;
`

const MainButtonWrapper = styled.div`
  position: fixed;
  right: 10px;
  z-index: 2;
`

export const StyledMainButton = styled.button`
  cursor: pointer;
  border-radius: 100%;
  background-color: ${theme('colors.primary')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme('colors.white')};
  font-weight: lighter;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px 0 rgba(19, 19, 19, 0.15);
  &:focus {
    outline: none;
  }
`

const StyledLabelButton = styled.div`
  position: absolute;
  right: 70px;
  width: auto;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
  
  > a {
    color: ${theme('colors.black')};
  }
`

const childButtonCss = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #3333FE;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
  color: #8898a5;
  border: none;
  z-index: 1;
  &:focus {
    outline: none;
  }
`
const backgroundInitialScale = 0.5
const backgroundFinalScale = 80
const StyledChildLink = styled(Link)(childButtonCss)
const mainButtonDiam = 60
const mainButtonMarginX = 20
const mainButtonMarginY = 20
const mainButtonInitialRotation = 0
const mainButtonFinalRotation = 135
const childButtonDiam = 48
const childButtonInitialRotation = 0
const childButtonFinalRotation = 0
const childButtonInitialScale = 0
const childButtonFinalScale = 1

let childButtonIcons = []
let numChildren
const childButtonSpringConfig = { stiffness: 300, damping: 20, precision: 50 }
const backgroundSpringConfig = { stiffness: 200, damping: 20, precision: 10 }
const flyOutRadius = 70 // distance between main button and child button
const separationAngle = 0 // degrees
const baseAngle = 90 // degrees
const childButtonAnimationDelay = 50

class MotionMenu extends Component {
  static toRadians(degrees) {
    return degrees * 0.0174533
  }

  static finalChildDeltaPositions(index) {
    const angle = baseAngle + index * separationAngle

    return {
      deltaX: index * flyOutRadius * Math.cos(MotionMenu.toRadians(angle)) - childButtonDiam / 2,
      deltaY: flyOutRadius + index * flyOutRadius * Math.sin(MotionMenu.toRadians(angle)) + childButtonDiam / 2,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      childButtons: [],
      mainButtonPositionX: 0,
      mainButtonPositionY: 0,
    }
  }

  componentDidMount() {

    this.buildButtons(this.props)

    window.addEventListener('resize', this.refreshPosition)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) this.buildButtons(nextProps)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.refreshPosition)
  }

  buildButtons({ hasActiveConversation, translate }) {

    const newChatButton = {
      type: 'link',
      element: {
        icon: 'bubble',
        dot: false,
        label: translate('motion_menu.start_new'),
      },
    }

    const resumeChatButton = {
      type: 'link',
      element: {
        icon: 'bubble',
        dot: true,
        url: '/project-elaboration',
        label: translate('motion_menu.resume'),
      },
    }


    childButtonIcons = []
    childButtonIcons.push(newChatButton)
    if (hasActiveConversation) childButtonIcons.push(resumeChatButton)
    numChildren = childButtonIcons.length

    const childButtons = []

    this.setState({ childButtons: [...childButtons], ...this.recalculatePosition() })

    range(numChildren).forEach(index => {
      childButtons.push(this.renderChildButton(index))
    })
  }

  recalculatePosition = () => ({
    mainButtonPositionX: document.documentElement.clientWidth - mainButtonDiam / 2 - mainButtonMarginX,
    mainButtonPositionY: window.innerHeight - mainButtonDiam / 2 - mainButtonMarginY,
    backgroundPositionX: window.innerWidth,
    backgroundPositionY: window.innerHeight,
  })

  refreshPosition = () => this.setState(this.recalculatePosition(), this.animateChildButtonsWithDelay)

  initialChildButtonStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: childButtonDiam,
      height: childButtonDiam,
      top: spring(mainButtonPositionY - childButtonDiam / 2, childButtonSpringConfig),
      left: spring(mainButtonPositionX - childButtonDiam / 2, childButtonSpringConfig),
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
      top: spring(mainButtonPositionY - childButtonDiam / 2, childButtonSpringConfig),
      left: spring(mainButtonPositionX - childButtonDiam / 2, childButtonSpringConfig),
      scale: spring(backgroundInitialScale, backgroundSpringConfig),
    }
  }

  finalBackgroundStyles() {
    const { mainButtonPositionX, mainButtonPositionY } = this.state

    return {
      width: mainButtonDiam,
      height: mainButtonDiam,
      top: spring(mainButtonPositionY - mainButtonDiam / 2, childButtonSpringConfig),
      left: spring(mainButtonPositionX - mainButtonDiam / 2, childButtonSpringConfig),
      scale: spring(backgroundFinalScale, backgroundSpringConfig),
    }
  }

  animateChildButtonsWithDelay() {
    const { childButtons } = this.state

    range(numChildren).forEach(index => {
      setTimeout(() => {
        childButtons[numChildren - index - 1] = this.renderChildButton(numChildren - index - 1)
        this.setState({ childButtons: childButtons.slice(0) })
      }, index * childButtonAnimationDelay)
    })
  }

  toggleMenu = e => {
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
            <StyledChildLink to={element.url} onClick={element.url ? undefined : this.props.redirectToConversation} style={elementStyle}>
              <StyledLabelButton>
                <Link>
                  {element.label}
                </Link>
              </StyledLabelButton>
              <StyledChildIcon icon={element.icon} style={element.style} dot={element.dot} size={35} />
            </StyledChildLink>
          )
        default:
          return ''
      }
    }

    return (
      <Motion style={style} key={index}>
        {({ width, height, top, left, rotate, scale }) =>
          childButton(childButtonIcons[index].type, childButtonIcons[index].element, {
            width,
            height,
            top,
            left,
            transform: `rotate(${rotate}deg) scale(${scale})`,
          })}
      </Motion>
    )
  }

  render() {
    const { isOpen, childButtons, mainButtonPositionX, mainButtonPositionY } = this.state
    const { hasActiveConversation, showCookieBanner, isSSR } = this.props
    const cookiesBannerMargin = showCookieBanner ? 60 : 0

    if (isSSR) return null

    const mainButtonRotation = isOpen
      ? { rotate: spring(mainButtonFinalRotation, [500, 30]) }
      : { rotate: spring(mainButtonInitialRotation, [500, 30]) }
    const style = isOpen ? this.finalBackgroundStyles() : this.initialBackgroundStyles()

    return (
      <Wrapper isOpen={this.state.isOpen}>
        <Motion style={style}>
          {({ width, height, scale }) =>
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
            />}
        </Motion>
        {childButtons.map((button, index) => childButtons[index])}
        <Motion style={mainButtonRotation}>
          {() =>
            <MainWrapper>
              {hasActiveConversation && (
                <Tooltip
                  id="motion_menu.tooltip_message"
                  style={{
                    visibility: isOpen ? 'hidden' : '',
                  }}
                />
              )}
              <MainButtonWrapper
                className="motion-menu-wrapper"
                style={{
                  top: mainButtonPositionY - cookiesBannerMargin - mainButtonDiam / 2,
                  left: mainButtonPositionX - mainButtonDiam / 2,
                }}
              >
                {hasActiveConversation && !isOpen && <BouncingBall />}
                <StyledMainButton
                  onClick={this.toggleMenu}
                >
                  <StyledMainIcon icon={isOpen ? 'close' : 'bubble'} size={42} isOpen={isOpen} {...this.props} />
                </StyledMainButton>
              </MainButtonWrapper>
            </MainWrapper>
          }
        </Motion>
      </Wrapper>
    )
  }
}

MotionMenu.propTypes = {
  redirectToConversation: PropTypes.func,
  hasActiveConversation: PropTypes.bool,
  showCookieBanner: PropTypes.bool,
  isSSR: PropTypes.bool,
}

export default injectTranslate(MotionMenu)
