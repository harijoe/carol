import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import stripTags from 'utils/stripTags'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import { Card, Section, TestimonialCardContent, Grid } from 'components'
import { PostList } from 'containers'

import getImageURL from 'utils/wpImage'

const StyledCard = styled(Card)`
  ${breakpoint('xs')`
    width: calc(100vw - 4.8rem);
    margin-left: calc(${theme('spaces.m')} / 2);
    margin-right: calc(${theme('spaces.m')} / 2);
  `}

  ${breakpoint('m')`
    width: 30rem;
    margin-left: calc(${theme('spaces.l')} / 2);
    margin-right: calc(${theme('spaces.l')} / 2)
  `}

  width: calc(100vw - 4.8rem);
  height: 100%;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`

const StyledGrid = styled(Grid)`
  max-width: 120rem;
  margin: 0 auto;

  .slick-list {
    padding-top: ${theme('spaces.m')};
    padding-bottom: ${theme('spaces.m')};
  }

  ${breakpoint('m')`
    .slick-slider {
      padding-bottom: ${theme('spaces.xl')};
    }
  `}
`

const generateChild = (i, { link, featuredMedia, customFields }) => {
  // @TODO: image is expected to be an object in a next backend update, this is a momentary polyfill
  const image = featuredMedia instanceof Object ? featuredMedia : { src: featuredMedia }

  image.src = getImageURL(image.src, '300x300')

  return (
    <StyledCard key={i}>
      <TestimonialCardContent
        link={link}
        image={image}
        firstName={stripTags(customFields.ttml_firstname)}
        age={customFields.ttml_age}
        location={stripTags(`${customFields.ttml_city}, ${customFields.ttml_postal_code}`)}
        quote={stripTags(customFields.ttml_quote)}
      />
    </StyledCard>
  )
}

const Testimonials = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('testimonials.section_title').label)} light>
    <StyledGrid>
      <PostList
        scope="testimonialArticles"
        tags={['api-testimony']}
        limit={10}
        generateChild={generateChild}
        carousel={{
          infinite: false,
          variableWidth: true,
          responsive: [
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 1055, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 10000, settings: { slidesToShow: 3, slidesToScroll: 3, arrows: true } },
          ],
          dots: true,
        }}
      />
    </StyledGrid>
  </Section>
)

Testimonials.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Testimonials)
