import React, { Component } from 'react'
import styled from 'styled-components'
import stripTags from 'utils/stripTags'
import { theme } from 'utils/style'

import { Section, Heading, Paragraph } from 'components'
import { PostList } from 'containers'

const StyledSection = styled(Section)`
  height: 65rem;
  width: 100%;
  padding: 0;
  overflow: hidden;

  .slick-dots {
    padding-bottom: ${theme('spaces.l')};
  }

  .slick-slider {
    max-width: 120rem;
    margin: 0 auto;

    &, .slick-list, .slick-track {
      display: block;
    }

    .slick-list {
      padding: 0;
    }
  }

  .slick-slide {
    float: left;
  }
`

const StyledItem = styled.div`${({ link }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  width: 37rem;
  min-height: 65rem;

  padding: ${theme('spaces.xxl')};
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
`

const StyledParagraph = styled(Paragraph)`
  position: relative;
  color: white !important;
  z-index: 2;
  width: 100%;
`

const WrapContent = styled.div`
  margin: 40% ${theme('spaces.xl')} 0 ${theme('spaces.xl')};
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
      <WrapContent>
        <StyledHeading level={3}>{stripTags(items.title)}</StyledHeading>
        <StyledParagraph>{stripTags(items.body)}</StyledParagraph>
      </WrapContent>
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
            autoplay: true,
            pauseOnHover: true,
            arrows: false,
          }}
        />
      </StyledSection>
    )
  }
}

export default ReinsuranceCarousel
