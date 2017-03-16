import React from 'react'
import styled from 'styled-components'
import { Section, Card, ThumbnailPoster, Bubble } from 'components'
import { cloudinaryUrl } from 'config'

const Header = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 95vh;
  width: 100%;

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

const StyledCard = styled(Card)`
  width: 11.2rem;
`

const StyledSection = styled(Section)`
  width: 100%;
`

const Hero = () => (
  <Header>
    <StyledSection>
      <Bubble />
      <StyledCard>
        <ThumbnailPoster
          imageLink={`${cloudinaryUrl}thumbnail-poster-keyone.jpg`}
          title="Fenêtres et ouvertures extérieures"
        />
      </StyledCard>
    </StyledSection>
  </Header>
)

export default Hero
