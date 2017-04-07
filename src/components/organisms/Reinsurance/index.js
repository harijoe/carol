import React, { Component } from 'react'
import stripTags from 'utils/stripTags'
import styled from 'styled-components'
import { ifThen } from 'utils/style'

import { Card, Section, SimpleCardContent, Grid, Col, Row, Image } from 'components'
import { PostList } from 'containers'

const StyledImageWrapper = styled.div`${({ active }) => `
  display: ${ifThen(active, 'block', 'none')};
`}`

const StyledImage = styled(Image)`
  z-index: -2;
  margin: -3.2rem 3.2rem -6.4rem -3.2rem;
  width: 100vw;
  height: 32rem;
`

const StyledCard = styled(Card)`
  min-height: 20rem;
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
                carousel={{ infinite: false, afterChange: this.afterChange }}
              />
            </Col>
          </Row>
        </Grid>
      </Section>
    )
  }
}

export default Reinsurance
