import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import messages from 'utils/messages'
import stripTags from 'utils/stripTags'

import { Card, Section, LastProjectCardContent, Grid, Col, Row } from 'components'
import { PostList } from 'containers'

const generateChild = (i, { title, featuredMedia, customFields }) => (
  <Card key={i}>
    <LastProjectCardContent
      title={stripTags(title)}
      image={customFields.project_bg}
      place={stripTags(customFields.project_city)}
      firmName={stripTags(customFields.project_firm)}
      firmImage={featuredMedia}
      firmTrade={stripTags(customFields.project_trade)}
    />
  </Card>
)

const LastProjects = ({ active, intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('last_projects.section_title').label)} light>
    <Grid>
      <Row>
        <Col xs={12}>
          <PostList
            scope="latestProjectsOnMap"
            tags={['api-last-project']}
            limit={3}
            active={active}
            generateChild={generateChild}
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

LastProjects.propTypes = {
  active: PropTypes.any,
  intl: intlShape.isRequired,
}

export default injectIntl(LastProjects)
