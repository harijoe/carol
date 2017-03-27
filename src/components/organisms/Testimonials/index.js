import React, { PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, TestimonialCardContent, Grid, Col, Row } from 'components'
import { PostList } from 'containers'

const generateChild = (i, { link, featuredMedia, customFields }) => (
  <Card key={i}>
    <TestimonialCardContent
      link={link}
      image={featuredMedia}
      firstName={customFields.ttml_firstname}
      age={customFields.ttml_age}
      location={`${customFields.ttml_city}, ${customFields.ttml_postal_code}`}
      quote={stripTags(customFields.ttml_quote)}
    />
  </Card>
)

const Testimonials = ({ active, intl: { formatMessage } }) => (
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

Testimonials.propTypes = {
  active: PropTypes.any,
  intl: intlShape.isRequired,
}

export default injectIntl(Testimonials)
