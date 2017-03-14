import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Card, Section, TestimonialCardContent } from 'components'

const Testimonial = () => (
  <Section title="Témoignages">
    <Grid>
      <Row>
        <Col xs={12}>
          <Card>
            <TestimonialCardContent
              imgLink="http://placehold.it/350x190"
              title="Joanne"
              subtitle="32 ans"
              label="Bergerac, 32000"
              content="Je voulais faire quelque chose qui me permettrait de rencontrer de novuelles personnes et de sortir de chez moi …"
              link="http://google.com"
            />
          </Card>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default Testimonial
