import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import { Section, ThumbnailCard, Paragraph, Grid, Row, MainWrapper, Heading } from 'components'
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
    background: url(${cloudinary('/hero-fullscreen_image.jpg')}) center center no-repeat;
    background-size: cover;
  }

  &::after {
    background: ${theme('colors.primary')};
    opacity: 0.85;
  }

  @media screen and (max-height: 600px) {
    padding-top: 10rem;
  }

  ${breakpoint('l')`
    min-height: 90vh;
  `};
`

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding-bottom: 0;
  width: 100%;
  background: transparent;
`

const StyledRow = styled(Row)`
  ${mapBreakpoints(
    () => css`
    margin: 0;
  `,
  )}
`

const StyledHeading = styled(Heading)`
  margin-bottom: ${theme('spaces.m')};
  color: ${theme('colors.white')};

  ${breakpointMax('m')`
    font-size: ${theme('fonts.size.xxl')};
  `}
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

const StyledGrid = styled(Grid)`
  max-width: 85rem;  
  margin-bottom: 12.5rem;

  @media screen and (max-height: 600px) {
    min-height: 20rem;
  }
  
  ${breakpoint('l')`
    min-height: 25rem;
    margin-bottom: 15rem;
  `}
`

const CarouselWrapper = styled.div`
  position: relative;

  ${mapBreakpoints(
    bp => css`
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} * -1);
    padding: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `,
  )} &::before {
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
    `};
  }
`

const generateChild = (items, reply) =>
  items.map(({ title, image_url, buttons, subtitle }, i) =>
    <ThumbnailCard
      key={i}
      // eslint-disable-next-line camelcase
      image={image_url}
      title={title}
      items={subtitle.split('\n')}
      onClick={() => reply(title, buttons[0].payload)}
    />,
  )

const FirstChoices = (choices, reply) =>
  <CarouselWrapper>
    {choices.length > 0 &&
      <Carousel
        variableWidth
        infinite={false}
        dots
        responsive={[
          {
            breakpoint: 767,
            settings: {
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 10000,
            settings: {
              arrows: true,
              slidesToScroll: 5,
              slidesToShow: 4,
            },
          },
        ]}
      >
        {generateChild(choices, reply)}
      </Carousel>}
  </CarouselWrapper>

const Hero = ({ firstChoices, reply }) =>
  <HeroWrapper className="hero">
    <MainWrapper resetState>
      <StyledSection>
        <Grid>
          <StyledRow column>
            <header>
              <StyledGrid narrow>
                <StyledHeading level={1}>
                  <FormattedMessage id="hero.title_message" />
                </StyledHeading>
                <SubHeading>
                  <FormattedMessage id="hero.welcome_message" />
                </SubHeading>
              </StyledGrid>
              {FirstChoices(firstChoices, reply)}
            </header>
          </StyledRow>
        </Grid>
      </StyledSection>
    </MainWrapper>
  </HeroWrapper>

Hero.propTypes = {
  firstChoices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image_url: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          payload: PropTypes.string,
        }),
      ),
      subtitle: PropTypes.string,
    }),
  ),
  reply: PropTypes.func,
}

export default Hero
