import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax } from 'utils/style'

import Icon from 'components/Icon'

const APPEAR_DELAY = 2
const APPEAR_DURATION = 0.3
const MOVEMENT_DURATION = 3
const MOVEMENT_COUNT = 4

const APPEAR_CSS = `
  transform: translateX(0);
  opacity: 1;
`
const DISAPPEAR_CSS = `
  transform: translateX(-100%);
  opacity: 0;
`

const Bubble = styled.div`
  position: fixed;
  right: 90px;
  bottom: 20px;
  border-radius: 10px 10px 0;
  padding: ${theme('spaces.l')};
  background-color: ${theme('colors.white')};
  transform: translateX(100%);
  opacity: 0;
  box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, 0.15);
  animation:
    ${APPEAR_DURATION}s ease-in-out ${APPEAR_DELAY}s 1 appear,
    ${MOVEMENT_DURATION}s cubic-bezier(0.83, 0.24, 0.28, 0.84) ${APPEAR_DELAY + APPEAR_DURATION}s ${MOVEMENT_COUNT} movement,
    ${APPEAR_DURATION}s ease-in-out ${APPEAR_DELAY + APPEAR_DURATION + MOVEMENT_COUNT * MOVEMENT_DURATION}s 1 disappear;

  ${breakpointMax('s')`
    width: calc( 100% - 11rem );
    padding: ${theme('spaces.m')};
  `};
  
  @keyframes appear {
    from {
      ${DISAPPEAR_CSS}
    }
    to {
      ${APPEAR_CSS}
    }
  }

  @keyframes movement {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    25% {
      transform: translateX(-16px);
      opacity: 1;
    }
    50% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes disappear {
    from {
      ${APPEAR_CSS}
    }
    to {
      ${DISAPPEAR_CSS}
    }
  }
`

const WrapperImage = styled.div`
  position: absolute;
  bottom: 1px;
  right: -15px;
  width: ${theme('icons.size.s')};
  height: ${theme('icons.size.m')};
  border: none;
  outline: none;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  z-index: 20;
  width: ${theme('icons.size.s')};
  height: ${theme('icons.size.m')};

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    width: 1px;
    height: 20px;
    background-color: #fff;
  }

  > svg {
    path {
      fill: #fff;
    }
  }
`

const StyledIconShadow = styled(Icon)`
  position: absolute;
  z-index: 19;
  top: 1px;
  left: 1px;
  width: ${theme('icons.size.s')};
  height: ${theme('icons.size.m')};

  > svg {
    path {
      fill: #131313;
      opacity: 0.1;
    }
  }
`

const Tooltip = ({ translate, id, ...props }) =>
  <Bubble {...props}>
    <WrapperImage>
      <StyledIcon icon="pointer" size={20} />
      <StyledIconShadow icon="pointer" size={20} />
    </WrapperImage>
    <div dangerouslySetInnerHTML={{ __html: translate(id) }} />
  </Bubble>

Tooltip.propTypes = {
  translate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default injectTranslate(Tooltip)
