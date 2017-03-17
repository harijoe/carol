import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, LastProjectCardContent } from 'components'
import { PostList } from 'containers'

const generateChild = (i, items) => (
  <Card key={i}>
    <LastProjectCardContent // @TODO: To be updated with relevant wordpress fields
      imageLink={items.featuredMedia}
      firmImage="http://lorempixel.com/90/90/people"
      firmName={stripTags(items.body)}
      firmJob="Electricien"
      title={items.title}
      place="Bergerac, 32000"
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
