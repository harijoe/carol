import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, breakpointMax, mapBreakpoints } from 'utils/style'

import { Carousel } from 'containers'
import Key2Thumbnail from './molecules/Key2Thumbnail'

const StyledCarousel = styled(Carousel)`
  margin: 0;
  padding: 0;

  > .slick-list {
    padding: ${theme('spaces.s')} 0;
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
  margin: 0 ${theme('spaces.s')};
  padding: 0;
  width: 14rem;

  &:first-child {
    margin-left: 0;
  }

  ${breakpoint('m')`
    width: 20rem;
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `};
`

const StyledButton = styled.button`
  background: transparent;
  padding: 0;
  width: 14rem;

  ${breakpoint('m')`
    width: 20rem;
  `} > div:first-child {
    width: 14rem;

    ${breakpoint('m')`
      width: 20rem;
    `} ${mapBreakpoints(
        () => css`
      margin: 0;
    `,
      )};
  }
`

const AttachmentGeneric = ({ attachment, reply }) =>
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
          swipe: true,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          swipe: true,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          arrows: true,
          swipe: false,
        },
      },
    ]}
  >
    {attachment.payload.elements.map(({ title, image_url, buttons, subtitle }, i) =>
      <StyledItem key={i}>
        <StyledButton
          onClick={() => {
            reply(title, buttons[0].payload)
          }}
        >
          <Key2Thumbnail
            title={title}
            // eslint-disable-next-line camelcase
            imageUrl={image_url}
            subtitle={subtitle}
          />
        </StyledButton>
      </StyledItem>,
    )}
  </StyledCarousel>

AttachmentGeneric.propTypes = {
  attachment: PropTypes.shape({
    payload: PropTypes.shape({
      elements: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  reply: PropTypes.func.isRequired,
}

export default AttachmentGeneric
