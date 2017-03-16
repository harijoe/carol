import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

import { Card, Section, LastProjectCardContent } from 'components'

const LastProjects = () => (
  <Section title="Derniers projets réalisés" light>
    <Grid>
      <Row>
        <Col xs={12}>
          <Card>
            <LastProjectCardContent
              imageLink="http://placehold.it/350x145"
              firmImage="http://lorempixel.com/90/90/people"
              firmName="Lournevois SARL"
              firmJob="Electricien"
              title="Installation électrique complète d'une maison"
              place="Bergerac, 32000"
            />
          </Card>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default LastProjects
