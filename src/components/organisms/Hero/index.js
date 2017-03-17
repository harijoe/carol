import React, { PropTypes }  from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Section, Card, Bubble, CardBlock } from 'components'
import { theme } from 'utils/style'
import { cloudinaryUrl } from 'config'

const Header = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 95vh;
  width: 100%;
  background: url(http://res.cloudinary.com/quotatis/image/upload/v1489742789/FrontApp/hero-fullscreen_image.jpg) center center no-repeat;
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

const Hero = ({ content, children }) => (
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
          <CardBlock
            link="http://google.fr"
            categoryImage={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
            categoryTitle="Fenêtres et ouvertures extérieures"
          />
        </Bubble>
      </div>

    </StyledSection>
  </Header>
)

export default Hero
