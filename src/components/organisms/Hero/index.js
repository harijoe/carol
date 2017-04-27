import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'
import { cloudinaryUrl } from 'config'

import {
  Section,
  Bubble,
  ThumbnailCard,
  Image,
  Paragraph,
  Grid,
  Row,
  Link,
  MainWrapper,
  Heading,
  Carousel,
} from 'components'

const HeroWrapper = styled.div`
  position: relative;
  min-height: 90vh;
  width: 100%;
  padding-top: 15rem;

  &::before, &::after {
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
`

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding-bottom: 0;
  padding-top: 0;
  width: 100%;
  background: transparent;
`

const StyledRow = styled(Row)`
  ${mapBreakpoints(() => css`
    margin: 0;
  `)}
`

const StyledHeader = styled.header`
  margin-bottom: ${theme('spaces.xl')};

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xxxl')};
  `}
`

const StyledBubble = styled(Bubble)`
  height: 6.4rem;
  width: 6.4rem;
  margin-bottom: ${theme('spaces.xl')};
  padding: ${theme('spaces.xs')};
  border-radius: 6rem;

  &::before {
    top: calc(100% - 0.5rem);
    left: calc(50% + 0.5rem);
    margin-left: 0;
    transform: rotate(150deg);
  }

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xl')};
  `}

  ${breakpoint('l')`
    margin-bottom: ${theme('spaces.xxl')};
    height: 8.4rem;
    width: 8.4rem;
  `}
`

const StyledImage = styled(Image)`
  height: auto;
  max-width: 100%;
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
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-bottom: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
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

    .slick-slide:first-child  > div {
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

const generateChild = (items, reply) => items.map(({ title, image_url, buttons, subtitle }, i) => (
  <ThumbnailCard
    key={i}
    link="project-elaboration"
    // eslint-disable-next-line camelcase
    image={`${image_url}`}
    title={title}
    items={subtitle.split(' | ')}
    onClick={() => reply(title, buttons[0].payload)}
  />
))

const Hero = ({ hasActiveConversation, firstChoices, reply, hasConversations }) => (
  <HeroWrapper>
    <MainWrapper>
      <StyledSection>
        {
          hasActiveConversation || hasConversations ?
            <StyledRow>
              <StyledHeader>
                <StyledBubble>
                  <StyledImage link={`${cloudinaryUrl}bot.png`} />
                </StyledBubble>
                <StyledHeading level={1}>
                  <Link to="project-elaboration">
                    <FormattedMessage id="hero.conversation_in_progress" />
                  </Link>
                </StyledHeading>
              </StyledHeader>
            </StyledRow>
            :
            <Grid>
              <StyledRow column>
                <StyledHeader>
                  <StyledBubble>
                    <StyledImage link={`${cloudinaryUrl}bot.png`} />
                  </StyledBubble>
                  <StyledHeading level={1}>
                    <FormattedMessage id="hero.title_message" />
                  </StyledHeading>
                  <SubHeading>
                    <FormattedMessage id="hero.welcome_message" />
                  </SubHeading>
                </StyledHeader>
              </StyledRow>
              <StyledRow>
                <CarouselWrapper>
                  {
                    firstChoices.length > 0 &&
                      <Carousel
                        variableWidth
                        infinite={false}
                        arrows
                        slidesToScroll={1}
                        dots
                        responsive={[
                          {
                            breakpoint: 767,
                            settings: { arrows: false },
                          },
                          {
                            breakpoint: 3000,
                            settings: { arrows: true },
                          },
                        ]}
                      >
                        { generateChild(firstChoices, reply) }
                      </Carousel>
                  }
                </CarouselWrapper>
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
