import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, TestimonialCardContent } from 'components'
import { PostList } from 'containers'

const generateChild = (i, items) => (
  <Card key={i}>
    <TestimonialCardContent
      imageLink={items.featuredMedia}
      title={items.title}
      subtitle="32 ans"
      label="Bergerac, 32000"
      content={stripTags(items.body)}
      link="http://google.com"
    />
  </Card>
)

const Testimonial = ({ active, intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('testimonials.section_title').label)}>
    <Grid>
      <Row>
        <Col xs={12}>
          <PostList
            scope="testimonialArticles"
            tags={['testimony']}
            limit={10}
            active={active}
            generateChild={generateChild}
            carousel
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

Testimonial.propTypes = {
  active: PropTypes.any,
  intl: intlShape.isRequired,
}

export default injectIntl(Testimonial)
