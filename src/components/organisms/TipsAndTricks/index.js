import React from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { FormattedMessage } from 'react-intl'

import { Section, TipsAndTricksBlock, Button } from 'components'

const TipsAndTricks = () => (
  <Section title="Conseils et astuces">
    <Grid>
      <Row>
        <Col xs={12}>
          <TipsAndTricksBlock
            header="Fenêtre"
            tags={[
              { label: 'preparer mes travaux', link: '' },
              { label: 'budget', link: '' },
            ]}
            title="Passer au <strong>double vitrage</strong> combien ça coute"
          />
        </Col>
        <Col xs={12}>
          <TipsAndTricksBlock
            header="Electricité"
            tags={[
              { label: 'preparer mes travaux', link: '' },
              { label: 'budget', link: '' },
            ]}
            imgLink="http://placehold.it/350x160"
            title="Les <strong>normes électriques</strong> pour une renovation"
          />
        </Col>
        <Col xs={12}>
          <TipsAndTricksBlock
            header="Rénovation"
            tags={[
              { label: 'découvrir', link: '' },
              { label: 'tendance', link: '' },
            ]}
            title="Salon <strong>maison et travaux</strong>, ce qu'on a retenu!"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="button" href="">
            <FormattedMessage id="tips_and_tricks.call_to_action" />
          </Button>
        </Col>
      </Row>
    </Grid>
  </Section>
)

export default TipsAndTricks
