import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { cloudinaryUrl, contentSiteUrl } from 'config'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Section, Bubble, ThumbnailCard, Image, Paragraph } from 'components'

const Header = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
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
    background: #3333FE;
    opacity: 0.95;
    content: '';
  }
`

const StyledSection = styled(Section)`
  width: 100%;
`

const StyledGrid = styled(Grid)`
  margin-bottom: ${theme('spaces.xl')};
`

const StyledImage = styled(Image)`
  height: 7rem;
  width: 7rem;
  margin-top: -3.5rem;
`

const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: flex-wrap;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: -3.2rem;
  margin-right: -3.2rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  overflow-y: hidden;
  overflow-x: visible;
`

const WelcomeMessage = styled(Paragraph)`
  margin: 0;
`

const Hero = () => (
  <Header>
    <StyledSection>
      <Bubble>
        <StyledGrid>
          <Row>
            <Col xs={4}>
              <StyledImage link={`${cloudinaryUrl}bot.png`} />
            </Col>
            <Col xs={8}>
              <WelcomeMessage>
                <FormattedMessage id="hero.welcome_message" />
              </WelcomeMessage>
            </Col>
          </Row>
        </StyledGrid>
        <ScrollWrapper>
          <ThumbnailCard
            link={`${contentSiteUrl}`}
            image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
            title="Fenêtres et ouvertures extérieures"
            icon="windowkey-pin"
            items={['item 1', 'item 2']}
          />
          <ThumbnailCard
            link={`${contentSiteUrl}`}
            image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
            title="Fenêtres et ouvertures extérieures"
            icon="windowkey-pin"
            items={['item 3', 'item 4']}
          />
          <ThumbnailCard
            link={`${contentSiteUrl}`}
            image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
            title="Fenêtres et ouvertures extérieures"
            icon="windowkey-pin"
            items={['item 5', 'item 6']}
          />
        </ScrollWrapper>
      </Bubble>
    </StyledSection>
  </Header>
)

Hero.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Hero)
