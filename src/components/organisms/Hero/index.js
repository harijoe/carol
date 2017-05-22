import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'
import { cloudinaryUrl } from 'config'

import {
  Section,
  ThumbnailCard,
  Paragraph,
  Grid,
  Row,
  Link,
  MainWrapper,
  Heading,
} from 'components'
import { Carousel } from 'containers'

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 80vh;
  width: 100%;
  padding-top: 15rem;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    width: 100%;
    content: '';
  }

  &::before {
    background: url(${cloudinaryUrl}hero-fullscreen_image.jpg) center center no-repeat;
    background-size: cover;
  }

  &::after {
    background: ${theme('colors.primary')};
    opacity: 0.85;
  }

  ${breakpoint('l')`
    min-height: 90vh;
  `}
`

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding-bottom: 0;
  width: 100%;
  background: transparent;
`

const StyledRow = styled(Row)`
  ${mapBreakpoints(() => css`
    margin: 0;
  `)}
`

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  color: ${theme('colors.white')};
`

const SubHeading = styled(Paragraph)`
  margin: 0;
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.xxxl')};
  line-height: normal;
  color: ${theme('colors.white')};

  ${breakpointMax('l')`
    font-size: ${theme('fonts.size.xxl')};
  `}

  ${breakpointMax('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`

const CarouselWrapper = styled.div`
  position: relative;

  ${mapBreakpoints(bp => css`
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    padding: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80%;
    max-width: ${theme('grid.container')}rem;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';
  }

  .slick-list {
    padding-top: ${theme('spaces.m')};
    padding-bottom: ${theme('spaces.m')};

    .slick-slide:first-child > div {
      margin-left: 0;
    }
  }

  .slick-slider {
    max-width: 100vw;

    ${breakpoint('xl')`
      max-width: ${theme('grid.container')}rem;
    `}
  }
`

const ModifyLink = styled(Link)`
  display: block;
  margin: ${theme('spaces.m')} 0;
  padding: ${theme('spaces.m')};
  max-width: 32rem;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  letter-spacing: 0.05rem;
  text-align: center;
  background-color: ${theme('colors.secondary')};
  color: ${theme('colors.black')};

  ${breakpoint('m')`
    padding: ${theme('spaces.l')};
    margin-bottom: ${theme('spaces.l')};
    margin-top: ${theme('spaces.l')};
  `}
`

const generateChild = (items, reply) => items.map(({ title, image_url, buttons, subtitle }, i) => (
  <ThumbnailCard
    key={i}
    link="project-elaboration"
    // eslint-disable-next-line camelcase
    image={image_url}
    title={title}
    items={subtitle.split('\n')}
    onClick={() => reply(title, buttons[0].payload)}
  />
))

const FirstChoices = (choices, reply) => (
  <CarouselWrapper>
    {
      choices.length > 0 &&
      <Carousel
        variableWidth
        infinite={false}
        arrows
        dots
        responsive={[
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              swipe: false,
              slidesToScroll: 3,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 10000,
            settings: {
              arrows: true,
              swipe: false,
              slidesToScroll: 4,
              slidesToShow: 4,
            },
          },
        ]}
      >
        { generateChild(choices, reply) }
      </Carousel>
    }
  </CarouselWrapper>
)

const Hero = ({ hasActiveConversation, firstChoices, reply, hasConversations }) => (
  <HeroWrapper>
    <MainWrapper>
      <StyledSection>
        {
          hasActiveConversation || hasConversations ?
            <StyledRow>
              <header>
                <StyledHeading level={1}>
                  <FormattedMessage id="hero.conversation_in_progress" />
                </StyledHeading>
                <ModifyLink to="project-elaboration">
                  <FormattedMessage id="hero.button_message" />
                </ModifyLink>
                <SubHeading>
                  <FormattedMessage id="hero.subheading_in_progress" />
                </SubHeading>
                {FirstChoices(firstChoices, reply)}
              </header>
            </StyledRow>
            :
            <Grid>
              <StyledRow column>
                <header>
                  <StyledHeading level={1}>
                    <FormattedMessage id="hero.title_message" />
                  </StyledHeading>
                  <SubHeading>
                    <FormattedMessage id="hero.welcome_message" />
                  </SubHeading>
                  {FirstChoices(firstChoices, reply)}
                </header>
              </StyledRow>
            </Grid>
        }
      </StyledSection>
    </MainWrapper>
  </HeroWrapper>
)

Hero.propTypes = {
  hasConversations: PropTypes.bool,
  hasActiveConversation: PropTypes.bool,
  firstChoices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image_url: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          payload: PropTypes.string,
        })
      ),
      subtitle: PropTypes.string,
    })
  ),
  reply: PropTypes.func,
}

export default Hero
