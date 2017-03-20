import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Section, Bubble, CardBlock } from 'components'
import { theme } from 'utils/style'
import { cloudinaryUrl } from 'config'

const Header = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 95vh;
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

const StyledDescribe = styled.p`
  margin: 0 ;
`

const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: flex-wrap;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: -3.2rem;
  margin-right: -3.2rem;
  padding-bottom: .5rem;
  padding-left: 2rem;
  overflow-y: hidden;
  overflow-x: visible;
`

const Hero = ({ children }) => (
  <Header>
    <StyledSection>
      <div>
        <Bubble>
          <StyledGrid>
            <Row>
              <Col xs={4}>

              </Col>
              <Col xs={8}>
                <StyledDescribe>
                  Bonjour, Je suis Quota !
                </StyledDescribe>
              </Col>
            </Row>
          </StyledGrid>         
          <ScrollWrapper>
            <CardBlock
              link="http://google.fr"
              image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
              title="Fenêtres et ouvertures extérieures"
              items={['sqdfsqdf', 'sdfsdf']}
            />
            <CardBlock
              link="http://google.fr"
              image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
              title="Fenêtres et ouvertures extérieures"
              items={['sqdfsqdf', 'sdfsdf']}
            />
            <CardBlock
              link="http://google.fr"
              image={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
              title="Fenêtres et ouvertures extérieures"
              items={['sqdfsqdf', 'sdfsdf']}
            />
          </ScrollWrapper>
        </Bubble>
      </div>

    </StyledSection>
  </Header>
)

export default Hero
