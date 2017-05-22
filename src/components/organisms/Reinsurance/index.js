import React, { Component } from 'react'
import stripTags from 'utils/stripTags'
import styled, { css } from 'styled-components'
import { ifThen, theme, mapBreakpoints, breakpoint } from 'utils/style'

import { Card, Section, SimpleCardContent, Image } from 'components'
import { PostList } from 'containers'

const StyledImageWrapper = styled.div`${({ active }) => `
  transition: opacity 0.4s ease-in;
  opacity: ${ifThen(active, '1', '0')};
`}`

const StyledImage = styled(Image)`
  z-index: 0;
  width: 100vw;
  position: absolute;
  margin: -3.2rem auto -17rem -1.6rem;

  ${breakpoint('m')`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    width: 70%;
  `}
`

const StyledSection = styled(Section)`
  ${breakpoint('m')`
    height: 55rem;
    padding: 0;

    .slick-slider {
      max-width: 120rem;
      margin: 0 auto;
    }

    ${breakpoint('m')`
      .slick-initialized .slick-slide {
        display: flex;
        justify-content: flex-end;
      }
    `}
  `}
`

const StyledCard = styled(Card)`
  ${mapBreakpoints(bp => css`
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `)}

  min-height: 20rem;
  width: calc(100vw - 4.8rem);
  margin-bottom: 0.8rem;
  margin-top: 50%;
  padding: ${theme('spaces.xl')} ${theme('spaces.m')};

  ${breakpoint('m')`
    margin-left: 0;
    margin-right: 10rem;
    margin-top: ${theme('spaces.xxl')};
    padding: ${theme('spaces.xxl')} ${theme('spaces.l')};
    width: 40rem;
    min-height: 45rem;
  `}
`

const StyledSimpleCardContent = styled(SimpleCardContent)`
  ${breakpoint('m')`
    .title {
      font-size: ${theme('fonts.size.xxl')};
    }
  `}
`

const generateChild = (i, items) => (
  <StyledCard key={i}>
    <StyledSimpleCardContent
      title={stripTags(items.title)}
      content={stripTags(items.body)}
    />
  </StyledCard>
)

class Reinsurance extends Component {
  state = {
    activeImage: 0,
  }

  afterChange = (slideIndex) => {
    this.setState({
      activeImage: slideIndex,
    })
  }

  generateBackground = (i, items) => (
    <StyledImageWrapper active={this.state.activeImage === i} key={i} >
      <StyledImage link={items.featuredMedia} />
    </StyledImageWrapper>
  )

  render() {
    return (
      <StyledSection light>
        <PostList
          scope="reinsuranceArticles"
          tags={['api-quotatis-reinsurance']}
          limit={3}
          generateChild={generateChild}
          generateBackground={this.generateBackground}
          carousel={{
            infinite: true,
            afterChange: this.afterChange,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            pauseOnHover: true,
            responsive: [{ breakpoint: 1200 }, { breakpoint: 10000, settings: { arrows: true } }],
          }}
        />
      </StyledSection>
    )
  }
}

export default Reinsurance
