import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Carousel, ThumbnailPoster } from 'components'

const StyledItem = styled.div`
  margin: 0 ${theme('spaces.xs')};
  padding: 0;
  max-width: 11.5rem;
  flex: 0 0 11.5rem;
  width: 100%;

  &:first-child {
    margin-left: 0;
  }

  ${breakpoint('m')`
    max-width: 12.6rem;
    flex: 0 0 12.6rem;
    margin-left: ${theme('spaces.s')};
    margin-right: ${theme('spaces.s')};
  `}

  ${breakpoint('xl')`
    max-width: 15rem;
    flex: 0 0 15rem;
  `}
`

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: ${theme('colors.white')};
`

const AttachmentGeneric = ({ attachment, reply }) => (
  <Carousel
    infinite={false}
    variableWidth
    slidesToScroll={3}
    responsive={[
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          arrows: false,
          swipe: true,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          arrow: true,
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
  </Carousel>
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
