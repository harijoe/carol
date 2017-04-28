import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { ThumbnailPoster } from 'components'
import { Carousel } from 'containers'

const StyledCarousel = styled(Carousel)`
  margin: 0;
  padding: 0;

  > .slick-list {
    padding: 0;
  }

  .slick-arrow.slick-next {
    right: -2rem;
  }

  .slick-arrow.slick-prev {
    left: -2rem;
  }

  ${breakpointMax('l')`
    .slick-arrow.slick-next {
      right: 0;
    }

    .slick-arrow.slick-prev {
      left: 0;
    }
  `}

  ${breakpointMax('m')`
    margin-left: -${theme('spaces.m')};
    margin-right: -${theme('spaces.m')};

    > .slick-list {
      padding-left: ${theme('spaces.m')};
      padding-right: ${theme('spaces.m')};
    }
  `}

  ${breakpoint('m')`
    padding-bottom: ${theme('spaces.l')};
  `}
`

const StyledItem = styled.div`
  margin: 0 ${theme('spaces.xs')};
  padding: 0;
  width: 11.5rem;

  &:first-child {
    margin-left: 0;
  }

  ${breakpoint('m')`
    width: 15rem;
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `}
`

const StyledButton = styled.button`
  background: ${theme('colors.white')};
  padding: 0;
`

const AttachmentGeneric = ({ attachment, reply }) => (
  <StyledCarousel
    slidesToShow={1}
    slidesToScroll={3}
    variableWidth
    infinite={false}
    dots
    responsive={[
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          swipe: true,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          swipe: true,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          arrows: true,
          swipe: false,
        },
      },
    ]}
  >
    {
      attachment.payload.elements.map(({ title, image_url, buttons }, i) => (
        <StyledItem key={i}>
          <StyledButton onClick={() => { reply(title, buttons[0].payload) }}>
            <ThumbnailPoster
              // eslint-disable-next-line camelcase
              image={image_url}
              title={title}
            />
          </StyledButton>
        </StyledItem>
      ))
    }
  </StyledCarousel>
)

AttachmentGeneric.propTypes = {
  attachment: PropTypes.shape({
    payload: PropTypes.shape({
      elements: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  reply: PropTypes.func.isRequired,
}

export default AttachmentGeneric
