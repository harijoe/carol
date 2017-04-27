import React, { Component } from 'react'
import styled from 'styled-components'
import stripTags from 'utils/stripTags'
import { ifThen, theme } from 'utils/style'

import { Section, Heading, Paragraph } from 'components'
import { PostList } from 'containers'

const StyledSection = styled(Section)`
  height: 65rem;
  padding: 0;
  overflow: hidden;
  
  .slick-list {
    padding: 0;
  }

  .slick-slider {
    max-width: 120rem;
    margin: 0 auto;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: flex-end;
  }
`

const StyledItem = styled.div`${({ active, link }) => `
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 36rem;
  min-height: 65rem;
  padding: ${theme('spaces.xxl')};
  transition: opacity 0.4s ease-in;
  opacity: ${ifThen(active, '1', '0')};
  background-image: url(${link});
  background-size: cover;
  
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    content: '';
    background-color: black;
    opacity: 0.5;
  }
`}`

const StyledHeading = styled(Heading)`
  position: relative;
  z-index: 2;
  width: 100%;
  font-size: ${theme('fonts.size.xxl')};
  color: white;
  margin-left: ${theme('spaces.l')};
  margin-right: ${theme('spaces.l')};
`

const StyledParagraph = styled(Paragraph)`
  position: relative;
  color: white !important;
  z-index: 2;
  width: 100%;
  margin-left:  ${theme('spaces.l')};
  margin-right:  ${theme('spaces.l')};
`

class ReinsuranceCarousel extends Component {
  state = {
    activeImage: 0,
  }

  afterChange = (slideIndex) => {
    this.setState({
      activeImage: slideIndex,
    })
  }

  generateChild = (i, items) => (
    <StyledItem key={i} active={this.state.activeImage === i} link={items.featuredMedia}>
      <StyledHeading level={3}>{stripTags(items.title)}</StyledHeading>
      <StyledParagraph>{stripTags(items.body)}</StyledParagraph>
    </StyledItem>
  )

  render() {
    return (
      <StyledSection>
        <PostList
          scope="reinsuranceArticles"
          tags={['api-quotatis-reinsurance']}
          limit={3}
          generateChild={this.generateChild}
          carousel={{
            infinite: true,
            afterChange: this.afterChange,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            pauseOnHover: true,
            arrows: false,
          }}
        />
      </StyledSection>
    )
  }
}

export default ReinsuranceCarousel
