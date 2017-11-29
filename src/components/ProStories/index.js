import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'
import { theme, breakpoint } from 'utils/style'

import Section from 'components/Section'
import StoryQuote from './atoms/StoryQuote'
import StoryTrademark from './molecules/StoryTrademark'
import StoryBackgroundImage from './molecules/StoryBackgroundImage'
import StoryCard from './organims/StoryCard'

const StyledSection = styled(Section)`
  ${({ pattern }) => css`
  background-image: url(${pattern});
  background-repeat: repeat;
  background-size: contain;
`};
`

const StoryWrapper = styled.article`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: -${theme('spaces.xl')} -${theme('spaces.m')};
  padding: ${theme('spaces.xxl')} ${theme('spaces.m')} ${theme('spaces.xl')} ${theme('spaces.m')};
  min-height: 100vh; 

  ${breakpoint('m')`
    justify-content: flex-end;
    margin: -${theme('spaces.xxl')} -${theme('spaces.l')};
    padding: ${theme('spaces.xxl')} ${theme('spaces.l')};
    min-height: 480px; 
  `}

  ${breakpoint('l')`
    margin: -${theme('spaces.xxl')};
    padding: ${theme('spaces.xxl')};
  `}

  * {
    z-index: 1;
  }
`

const ProStories = ({ quoteText, name, trade, globalRating, globalRatingCount }) =>
  <StyledSection darkgrey pattern={cloudinary('/pattern/wood_pattern_light.svg')}>
    <StoryWrapper>
      <StoryBackgroundImage background={{ src: 'http://res.cloudinary.com/quotatis/image/upload/v1501836928/FrontApp/pro-hero-fullscreen_image.jpg' }} />
      <StoryQuote>
        {quoteText}
      </StoryQuote>
      <StoryCard
        image={{ src: 'http://res.cloudinary.com/quotatis/image/upload/v1505381549/FrontApp/ChatbotImages/shutterstock_408737758.jpg' }}
        name={name}
        trade={trade}
        globalRating={globalRating}
        globalRatingCount={globalRatingCount}
      />
      <StoryTrademark />
    </StoryWrapper>
  </StyledSection>

ProStories.propTypes = {
  quoteText: PropTypes.string,
  globalRating: PropTypes.string,
  globalRatingCount: PropTypes.string,
  trade: PropTypes.string,
  name: PropTypes.string,
}

ProStories.defaultProps = {
  globalRating: '4.1',
  globalRatingCount: '35',
  trade: 'Menuisier',
  name: 'Nom entreprise',
  quoteText: 'Les prospects de Quotatis sont des prospects qualifiés, qui ont des projets réels. Quotatis nous apporte un confort en termes de prospection commerciale, et ça nous facilite vraiment la vie.',
}

export default injectTranslate(ProStories)
