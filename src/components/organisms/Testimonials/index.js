import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'

import { Card, Section, TestimonialCardContent, Grid, Col, Row } from 'components'
import { PostList } from 'containers'

const StyledCard = styled(Card)`
  width: 30rem;
`

const generateChild = (i, { link, featuredMedia, customFields }) => (
  <StyledCard key={i}>
    <TestimonialCardContent
      link={link}
      image={featuredMedia}
      firstName={stripTags(customFields.ttml_firstname)}
      age={customFields.ttml_age}
      location={stripTags(`${customFields.ttml_city}, ${customFields.ttml_postal_code}`)}
      quote={stripTags(customFields.ttml_quote)}
    />
  </StyledCard>
)

const Testimonials = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('testimonials.section_title').label)} light>
    <Grid>
      <Row>
        <Col xs={12}>
          <PostList
            scope="testimonialArticles"
            tags={['api-testimony']}
            limit={10}
            generateChild={generateChild}
            carousel
          />
        </Col>
      </Row>
    </Grid>
  </Section>
)

Testimonials.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Testimonials)
