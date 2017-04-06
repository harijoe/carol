import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { Section, Bubble, ThumbnailCard, Image, Paragraph, Grid, Col, Row, Link } from 'components'

const Header = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  height: 97vh;
  width: 100%;
  background: url(${cloudinaryUrl}hero-fullscreen_image.jpg) center center no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #3333fe;
    opacity: 0.95;
    content: '';
  }
`

const StyledSection = styled(Section)`
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  background: transparent;
`

const StyledGrid = styled(Grid)`
  margin-bottom: ${theme('spaces.xl')};
`

const StyledImage = styled(Image)`
  height: 7rem;
  width: 7rem;
  margin-top: -5rem;

  ${breakpoint('m')`
    margin-left: ${theme('spaces.xl')};
  `}
`

const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: flex-wrap;
  margin: 0 -3.2rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  overflow-y: visible;
  overflow-x: hidden;

  ${breakpoint('m')`
    top: 5rem;
    padding-left: ${theme('spaces.xxl')};
  `}
`

const WelcomeMessage = styled(Paragraph)`
  margin: 0;

  ${breakpoint('m')`
    margin-left: calc(${theme('spaces.xxl')}*3);
    font-size: ${theme('fonts.size.m')};
    margin-bottom: 0;
  `}
`


const Hero = ({ hasConversation, firstChoices, reply }) => (
  <Header>
    <StyledSection>
      {
        hasConversation ?
          <Bubble>
            <Link to="project-elaboration"><FormattedMessage id="hero.conversation_in_progress" /></Link>
          </Bubble>
          :
          <Bubble>
            <StyledGrid>
              <Row>
                <Col xs={4} reverse>
                  <StyledImage link={`${cloudinaryUrl}bot.png`} />
                </Col>
                <Col xs={8} m={12}>
                  <WelcomeMessage>
                    <FormattedMessage id="hero.welcome_message" />
                  </WelcomeMessage>
                </Col>
              </Row>
            </StyledGrid>
            <ScrollWrapper>
              {
                firstChoices.length > 0 && firstChoices.map(({ title, image_url, buttons, subtitle }, i) => (
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
              }
            </ScrollWrapper>
          </Bubble>
      }
    </StyledSection>
  </Header>
)

Hero.propTypes = {
  hasConversation: PropTypes.bool,
  firstChoices: PropTypes.array,
  reply: PropTypes.func,
}

export default Hero
