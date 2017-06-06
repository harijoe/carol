import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme, ifThen, mapBreakpoints, breakpoint } from 'utils/style'

const textStyles = ({ dark, grey, primary, secondary, success, alert }) => css`
  ${ifThen(dark, css`color: ${theme('colors.black')};`)}
  ${ifThen(grey, css`color: ${theme('colors.grayscale.medium')};`)}
  ${ifThen(primary, css`color: ${theme('colors.primary')};`)}
  ${ifThen(secondary, css`color: ${theme('colors.secondary')};`)}
  ${ifThen(success, css`color: ${theme('colors.success')};`)}
  ${ifThen(alert, css`color: ${theme('colors.alert')};`)}
  
  margin: 0;
  font-size: ${theme('fonts.size.base')};
`

const Text = styled.p`${textStyles}`

const blockStyles = ({ dark, grey, primary, secondary, success, alert }) => css`
  background: ${theme('colors.white')};
  border-bottom-width: 0.3rem;
  border-top-width: 0.3rem;
  border-bottom-style: solid;
  border-top-style: solid;

  ${mapBreakpoints(bp => css`
    padding: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}

  ${breakpoint('xl')`
    padding: ${theme('grid.gutterWidth.l')}rem;
  `}

  ${ifThen(dark, css`background: ${theme('colors.black')};`)}
  ${ifThen(primary, css`border-color: ${theme('colors.primary')};`)}   
  ${ifThen(grey, css`border-color: ${theme('colors.grayscale.light')};`)}
  ${ifThen(secondary, css`border-color: ${theme('colors.secondary')};`)}
  ${ifThen(success, css`border-color: ${theme('colors.success')};`)}
  ${ifThen(alert, css`border-color: ${theme('colors.alert')};`)}   
`

const Wrapper = styled.div`${blockStyles}`

const NotificationBox = ({ primary, grey, dark, success, alert, children, text, ...props }) => (
  <Wrapper {...{ primary, grey, dark, success, alert }} {...props}>
    {text != null && <Text {...{ primary, grey, dark, success, alert }} {...props}>{text}</Text>}
    {children}
  </Wrapper>
)

NotificationBox.propTypes = {
  grey: PropTypes.bool,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  success: PropTypes.bool,
  alert: PropTypes.bool,
  children: PropTypes.any,
  text: PropTypes.string,
}

export default NotificationBox
