import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Card, Carousel, Section, SimpleCardContent } from 'components'

const Reinsurance = () => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <Carousel>
            <Card>
              <SimpleCardContent
                title="1. Quotatis vous aide à concrétiser vos projets"
                content="Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
              />
            </Card>
            <Card>
              <SimpleCardContent
                title="2. Quotatis vous aide à concrétiser vos projets"
                content="Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
              />
            </Card>
            <Card>
              <SimpleCardContent
                title="3. Quotatis vous aide à concrétiser vos projets"
                content="Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
              />
            </Card>
          </Carousel>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default Reinsurance
