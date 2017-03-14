import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Card, Section, SimpleCardContent } from 'components'

const Reinsurance = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <Card>
            <SimpleCardContent
              title="Quotatis vous aide à concrétiser vos projets"
              content="Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            />
          </Card>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default Reinsurance
