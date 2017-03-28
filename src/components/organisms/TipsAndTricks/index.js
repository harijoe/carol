import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import messages from 'utils/messages'

import { PostList } from 'containers'
import { Section, TipsAndTricksBlock, Button, Grid, Col, Row } from 'components'

const generateChild = (i, items) => (
  <Col xs={12} key={i}>
    <TipsAndTricksBlock
      header="Fenêtre"
      tags={[
        { label: 'préparer mes travaux', link: '' },
        { label: 'budget', link: '' },
      ]}
      title={items.title}
    />
  </Col>
)

const TipsAndTricks = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('tips_and_tricks.section_title').label)}>
    <Grid>
      <Row>
        <PostList
          scope="latestProjectsResources"
          tags={['api-work-resources']}
          limit={5}
          active="all"
          generateChild={generateChild}
        />
      </Row>
      <Row>
        <Col>
          <Button type="button">
            <FormattedMessage id="tips_and_tricks.call_to_action" />
          </Button>
        </Col>
      </Row>
    </Grid>
  </Section>
)

TipsAndTricks.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TipsAndTricks)
