import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import HeroSection from 'components/HeroSection'
import SearchDirectory from 'components/SearchDirectory'

const StyledHeroSection = styled(HeroSection)`
  min-height: 100vh;

  section > div {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
  }

  .qs-Hero-title {
    margin-bottom: 0;
    font-family: ${theme('fonts.family.andesLight')};

    strong {
      font-family: ${theme('fonts.family.andesBlack')};
    }
  }

  ${breakpointMax('l')`
    padding-top: 7rem;
  `}

  ${breakpoint('m')`
    justify-content: center;
    min-height: 62.5rem;
  `}

  @media screen and (max-height: 1024px) and (min-height: 950px) {
    min-height: 50vh;
  }
`

const Subtitle = styled.p`
  margin: ${theme('spaces.l')} 0 ${theme('spaces.xl')} 0;
  color: ${theme('colors.white')};
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.l')};
  line-height: 1.25;

  ${breakpoint('m')`
    margin: ${theme('spaces.l')} 0 ${theme('spaces.xl')} 0;
    max-width: 80%;
    font-size: ${theme('fonts.size.xl')};
  `}
`

const DirectoryHero = ({ translate }) =>
  <StyledHeroSection imageLink={cloudinary('/directory-hero-fullscreen_image.jpg')} dark title={<span dangerouslySetInnerHTML={{ __html: translate('directory.hero.title') }} />}>
    <Subtitle>
      {translate('directory.hero.welcome_message')}
    </Subtitle>
    <SearchDirectory />
  </StyledHeroSection>

DirectoryHero.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(DirectoryHero)
