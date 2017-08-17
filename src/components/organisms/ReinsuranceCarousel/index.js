import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import stripTags from 'utils/stripTags'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { Heading, Paragraph, Card } from 'components'
import { PostList } from 'containers'

const StyledAside = styled.aside`
  width: 100%;
  padding: 0;

  > div:first-child {
    display: flex;
    height: 100%;

    > div {
      max-width: 100%;
    }
  }

  .slick-dots {
    bottom: ${theme('spaces.xl')};
  }

  .slick-slider {
    margin: 0;
    padding: 0;
    margin-bottom: 5rem;

    &,
    .slick-list,
    .slick-track {
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

const StyledItem = styled.div`
  ${({ src }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${theme('spaces.xxl')};
  height: 100%;
  background-image: url(${src});
  background-size: 100% 45rem;
  background-repeat:no-repeat;
  background-position:center top;
`};
`

const StyledHeading = styled(Heading)`
  position: relative;
  z-index: 10;
  width: 100%;
  font-size: ${theme('fonts.size.xl')};
  color: ${theme('colors.black')};
`

const StyledParagraph = styled(Paragraph)`
  position: relative;
  z-index: 10;
  width: 100%;
  line-height: 1.5;
  color: ${theme('colors.black')};
`

const StyledCard = styled(Card)`
  ${mapBreakpoints(
    bp => css`
    margin-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    margin-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `,
  )}

  width: calc(100vw - 4.8rem);
  margin-bottom: 0.8rem;
  margin-top: 50%;
  padding: ${theme('spaces.xl')} ${theme('spaces.m')};

  ${breakpoint('m')`
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(${theme('spaces.xxxl')} * 2.1);
    padding: ${theme('spaces.xxl')} ${theme('spaces.xxl')};
    min-height: 31.2rem;
    width: 48rem;
  `}
`

const WrapContent = styled.div`margin: 15rem ${theme('spaces.xl')} 0 ${theme('spaces.xl')};`

class ReinsuranceCarousel extends Component {
  state = {
    activeImage: 0,
  }

  afterChange = slideIndex => {
    this.setState({
      activeImage: slideIndex,
    })
  }

  generateChild = (i, { featuredMedia: { src }, title, body }) =>
    <StyledItem key={i} src={src}>
      <WrapContent>
        <StyledCard>
          <StyledHeading level={3}>
            {stripTags(title)}
          </StyledHeading>
          <StyledParagraph>
            {stripTags(body)}
          </StyledParagraph>
        </StyledCard>
      </WrapContent>
    </StyledItem>

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
