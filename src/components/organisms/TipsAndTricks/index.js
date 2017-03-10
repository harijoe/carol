import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Section, TipsAndTricksBlock, Button } from 'components'

const TipsAndTricks = () => (
  <Section title="Coucou">
    <Grid>
      <Row>
        <Col>
          <TipsAndTricksBlock
            header=""
            tags={['tag1', 'tag2']}
            imgLink="Coucou"
            title="Coucou"
          />
        </Col>
        <Col>
          <TipsAndTricksBlock
            header=""
            tags={['tag1', 'tag2']}
            imgLink="Coucou"
            title="Coucou"
          />
        </Col>
        <Col>
          <TipsAndTricksBlock
            header=""
            tags={['tag1', 'tag2']}
            imgLink="Coucou"
            title="Coucou"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="button" href="">Call to action</Button>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default TipsAndTricks
