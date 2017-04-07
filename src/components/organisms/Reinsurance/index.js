import React, { Component } from 'react'
import stripTags from 'utils/stripTags'
import styled, { css } from 'styled-components'
import { ifThen, theme, mapBreakpoints } from 'utils/style'

import { Card, Section, SimpleCardContent, Grid, Col, Row, Image } from 'components'
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
`

const generateChild = (i, items) => (
  <StyledCard key={i}>
    <SimpleCardContent
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
      <Section light>
        <Grid>
          <Row>
            <Col xs={12}>
              <PostList
                scope="reinsuranceArticles"
                tags={['api-quotatis-reinsurance']}
                limit={3}
                generateChild={generateChild}
                generateBackground={this.generateBackground}
                carousel={{
                  infinite: false,
                  afterChange: this.afterChange,
                  variableWidth: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                }}
              />
            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}

export default Reinsurance
