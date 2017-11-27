import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { HeroSection } from 'components'

const StyledHeroSection = styled(HeroSection)`
  min-height: 100vh;

  section > div {
    max-width: 80rem;
  }

  ${breakpoint('l')`
    justify-content: center;
    min-height: 62.5rem;
  `}
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

const DirectoryHero = ({ translate }) =>
  <StyledHeroSection imageLink={cloudinary('/hero-fullscreen_image.jpg')} dark title={translate('directory.hero.title')}>
    <Subtitle>
      {translate('directory.hero.welcome_message')}
    </Subtitle>
  </StyledHeroSection>

DirectoryHero.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(DirectoryHero)
