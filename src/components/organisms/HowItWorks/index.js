import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Section, HowItWorksBlock } from 'components'

const HowItWorks = () => (
  <Section title="Coucou">
    <Grid>
      <Row>
        <Col>
          <HowItWorksBlock
            img="Coucou"
            title="Coucou"
            content="Coucou"
          />
        </Col>
        <Col>
          <HowItWorksBlock
            img="Coucou"
            title="Coucou"
            content="Coucou"
          />
        </Col>
        <Col>
          <HowItWorksBlock
            img="Coucou"
            title="Coucou"
            content="Coucou"
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default HowItWorks
