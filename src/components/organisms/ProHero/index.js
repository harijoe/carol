import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { HeroSection, Button } from 'components'

const StyledHeroSection = styled(HeroSection)`
  min-height: 100vh;

  section > div {
    max-width: 80rem;
  }

  ${breakpoint('l')`
    justify-content: center;
    min-height: 80rem;
  `}

  @media screen and (max-height: 1200px) and (min-height: 992px) and (max-width: 992px) {
    min-height: 62rem;
  }
`

const Subtitle = styled.p`
  margin: ${theme('spaces.l')} 0 ${theme('spaces.xl')} 0;
  color: ${theme('colors.white')};
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.xl')};

  ${breakpoint('m')`
    margin: ${theme('spaces.l')} 0 ${theme('spaces.xxl')} 0;
    font-size: ${theme('fonts.size.xxl')};
  `}
`

const StyledButton = styled(Button)`
  margin: ${theme('spaces.xxl')} 0;
`

const ProHero = ({ translate }) =>
  <StyledHeroSection imageLink={cloudinary('/pro-hero-fullscreen_image.jpg')} dark title={translate('pro.hero.title')}>
    <Subtitle>
      {translate('pro.hero.welcome_message')}
    </Subtitle>
    <StyledButton maxWidth large>
      {translate('pro.hero.call_to_action')}
    </StyledButton>
  </StyledHeroSection>

ProHero.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(ProHero)
