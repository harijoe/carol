import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled, { css } from 'styled-components'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'
import { theme, mapBreakpoints } from 'utils/style'

import { Card, Section, TestimonialCardContent, Grid, Col, Row } from 'components'
import { PostList } from 'containers'

const StyledCard = styled(Card)`
  ${mapBreakpoints(bp => css`
    margin-left: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
    margin-right: calc(${theme(`grid.gutterWidth.${bp}`, 'rem')} / 2);
  `)}

  width: calc(100vw - 4.8rem);
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
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
            carousel={{
              infinite: false,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }}
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
