import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import messages from 'utils/messages'

import { Card, Section, LastProjectCardContent } from 'components'
import { PostList } from 'containers'

const generateChild = (i, { title, featuredMedia, customFields }) => (
  <Card key={i}>
    <LastProjectCardContent
      title={title}
      image={featuredMedia}
      place={customFields.project_city}
      firmName={customFields.project_firm}
      firmImage={customFields.project_bg}
      firmTrade={customFields.project_trade}
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
            tags={['inspiration', 'last-project']}
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
