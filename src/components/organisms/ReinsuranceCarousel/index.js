import React, { Component } from 'react'
import styled from 'styled-components'
import stripTags from 'utils/stripTags'
import { theme } from 'utils/style'

import { Heading, Paragraph } from 'components'
import { PostList } from 'containers'

const StyledAside = styled.aside`
  min-height: 65rem;
  height: 100%;
  width: 100%;
  padding: 0;
  overflow: hidden;

  > div:first-child {
    display: flex;
    height: 100%;

    > div {
      max-width: 100%;
    }
  }

  .slick-dots {
    padding-bottom: ${theme('spaces.l')};
  }

  .slick-slider {
    margin: 0;
    padding: 0;

    &, .slick-list, .slick-track {
      display: block;
      height: 100%;
    }

    .slick-list {
      padding: 0;
    }
  }

  .slick-slide {
    float: left;
  }
`

const StyledItem = styled.div`${({ src }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme('spaces.xxl')};
  height: 100%;
  background-image: url(${src});
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
  margin: 15rem ${theme('spaces.xl')} 0 ${theme('spaces.xl')};
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

  generateChild = (i, { featuredMedia: { src }, title, body }) => (
    <StyledItem key={i} src={src}>
      <WrapContent>
        <StyledHeading level={3}>{stripTags(title)}</StyledHeading>
        <StyledParagraph>{stripTags(body)}</StyledParagraph>
      </WrapContent>
    </StyledItem>
  )

  render() {
    return (
      <StyledAside>
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
      </StyledAside>
    )
  }
}

export default ReinsuranceCarousel
