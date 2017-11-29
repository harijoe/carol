import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme, ifThen } from 'utils/style'

const titleStyles = ({ dark, grey, primary, secondary, success, alert }) => css`
  ${ifThen(dark, css`color: ${theme('colors.black')};`)}
  ${ifThen(grey, css`color: ${theme('colors.grayscale.medium')};`)}
  ${ifThen(primary, css`color: ${theme('colors.primary')};`)}
  ${ifThen(secondary, css`color: ${theme('colors.secondary')};`)}
  ${ifThen(success, css`color: ${theme('colors.success')};`)}
  ${ifThen(alert, css`color: ${theme('colors.alert')};`)}
  
  position: relative;
  margin-bottom: ${theme('spaces.s')};
  margin-top: 0;
  font-size: ${theme('fonts.size.base')};
  font-weight: bold;
  word-wrap: break-word;
`

const Title = styled.h4`${titleStyles};`

const Text = styled.p`
  margin: 0;
  font-size: ${theme('fonts.size.base')};
  word-wrap: break-word;
`

const blockStyles = ({ dark, grey, primary, secondary, success, alert }) => css`
  padding: ${theme('spaces.m')} 0;
  background: ${theme('colors.white')};
  border-bottom-width: 0.3rem;
  border-top-width: 0.3rem;
  border-bottom-style: solid;
  border-top-style: solid;

  ${ifThen(dark, css`border-color: ${theme('colors.black')};`)}
  ${ifThen(primary, css`border-color: ${theme('colors.primary')};`)}   
  ${ifThen(grey, css`border-color: ${theme('colors.grayscale.light')};`)}
  ${ifThen(secondary, css`border-color: ${theme('colors.secondary')};`)}
  ${ifThen(success, css`border-color: ${theme('colors.success')};`)}
  ${ifThen(alert, css`border-color: ${theme('colors.alert')};`)}   
`

const Wrapper = styled.div`${blockStyles};`

const NotificationBox = ({ primary, grey, dark, success, alert, children, title, text, className, clickTitleHandler, ...props }) =>
  <Wrapper className={className} {...{ primary, grey, dark, success, alert }} {...props}>
    {title != null &&
      <Title onClick={clickTitleHandler && clickTitleHandler} {...{ primary, grey, dark, success, alert }} {...props}>
        {title}
      </Title>}
    {text != null &&
      <Text {...props}>
        {text}
      </Text>}
    {children}
  </Wrapper>

NotificationBox.propTypes = {
  grey: PropTypes.bool,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  success: PropTypes.bool,
  alert: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  clickTitleHandler: PropTypes.func,
}

export default NotificationBox
