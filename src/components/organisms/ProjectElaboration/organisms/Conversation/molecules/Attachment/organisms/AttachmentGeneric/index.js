import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { List, ListItem, Button, ThumbnailPoster } from 'components'

const StyledList = styled(List)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding-bottom: ${theme('spaces.m')};
  padding-top: ${theme('spaces.m')};
  overflow-y: hidden;
  overflow-x: visible;
  list-style: none;

  &::-webkit-scrollbar-track {
    border-radius: 6rem;
    background-color: ${theme('colors.grayscale.lightest')};
  }

  &::-webkit-scrollbar {
    height: ${theme('spaces.xs')};
    width: ${theme('spaces.xs')};
    background-color: ${theme('colors.grayscale.lightest')};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6rem;
    background-color: ${theme('colors.grayscale.light')};
  }

  ${mapBreakpoints(bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}
`

const StyledListItem = styled(ListItem)`
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

const StyledButton = styled(Button)`
  padding: 0;
  width: 100%;

  > figure {
    height: 17.5rem;
    box-shadow: 1px 1px 2px 0 rgba(19, 19, 19, .15);

    ${breakpoint('xl')`
      height: 20rem;
    `}
  }

  h3 {
    ${breakpoint('l')`
      font-size: ${theme('fonts.size.l')};
    `}
  }
`

const AttachmentGeneric = ({ attachment, reply }) => (
  <StyledList>
    {
      attachment.payload.elements.map(({ title, image_url, buttons }, i) => (
        <StyledListItem key={i}>
          <StyledButton onClick={() => { reply(title, buttons[0].payload) }}>
            <ThumbnailPoster
              // eslint-disable-next-line camelcase
              image={image_url}
              title={title}
            />
          </StyledButton>
        </StyledListItem>
      ))
    }
  </StyledList>
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
