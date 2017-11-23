import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Icon, Link, Heading } from 'components'

const TrademarkWrapper = styled.footer`
  display: flex;
  border-top: 1px solid rgba(238, 238, 238, 0.5);

  ${breakpointMax('m')`
    width: calc(100% + 3.2rem);
    margin-bottom: -${theme('spaces.xl')};
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};
    margin-top: ${theme('spaces.xl')};
    padding: ${theme('spaces.m')} ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
    background-color: ${theme('colors.grayscale.darker')};
  `}

  ${breakpoint('m')`
    position: absolute;
    top: 70%;
    left: 0;
    padding-left: ${theme('spaces.l')};
    padding-right: 45rem;
    padding-top: ${theme('spaces.l')};
    width: 100%;
  `}

  ${breakpointMax('l')`
    z-index: 0;
  `}

  ${breakpoint('l')`
    top: auto;
    bottom: ${theme('spaces.xxl')};
    left: ${theme('spaces.xxl')};
    padding-left: 0;
    padding-right: 0;
    width: 575px;
  `}
`

const Logo = styled(Icon)`
  height: 52px;
  width: 50px;

  g#baseline {
    display: none;
  }

  ${breakpoint('m')`
    height: 77px;
    width: 75px;
  `}
`

const HeadingStory = styled(Heading)`
  margin: 0 0 0 ${theme('spaces.m')};
  padding-top: ${theme('spaces.s')};
  font-size: ${theme('fonts.size.l')};
  color: ${theme('colors.white')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: ${theme('spaces.xs')};
  font-family: ${theme('fonts.family.montserrat')};
  font-size: ${theme('fonts.size.base')};
  font-weight: normal;
  text-decoration: underline;
  color: ${theme('colors.white')};
  transition: box-shadow 0.3s ease, text-decoration 0.3s ease-out;

  &:hover {
    box-shadow: inset 0 -15px 0 ${theme('colors.primary')};
  }
`

const StoryTrademark = ({ translate }) =>
  <TrademarkWrapper>
    <Logo icon="logo-white-withoutsignet" />
    <HeadingStory level={5}>
      {translate('pro.story.title')}<br />
      <StyledLink>{translate('pro.story.link')}</StyledLink>
    </HeadingStory>
  </TrademarkWrapper>

StoryTrademark.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(StoryTrademark)
