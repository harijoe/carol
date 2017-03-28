import React from 'react'
import stripTags from 'utils/stripTags'

import { Card, Section, SimpleCardContent, Grid, Col, Row } from 'components'
import { PostList } from 'containers'

const generateChild = (i, items) => (
  <Card key={i}>
    <SimpleCardContent
      title={items.title}
      content={stripTags(items.body)}
    />
  </Card>
)

const Reinsurance = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <PostList
            scope="reinsuranceArticles"
            tags={['api-quotatis-reinsurance']}
            limit={3}
            active="quotatis-reinsurance"
            generateChild={generateChild}
            carousel
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default Reinsurance
