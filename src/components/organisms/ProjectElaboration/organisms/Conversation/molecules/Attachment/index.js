import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'

import { List, ListItem, Button, ThumbnailPoster } from 'components'

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

const StyledList = styled(List)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding-top: ${theme('spaces.m')};
  overflow-y: hidden;
  overflow-x: visible;
  list-style: none;

  ${mapBreakpoints(bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `)}

  ${breakpoint('l')`
    position: absolute;
    left: 0;
    width: calc(100vw - 25%);

    &::before {
      position: absolute;
      left: 0;
      height: 100%;
      width: ${theme('spaces.l')};
      background: linear-gradient(to right, ${theme('colors.grayscale.lightest')}, rgba(249, 249, 249, 0));
      content: '';
    }

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
  `}
`

const Attachment = ({ attachment, reply, response }) => {
  if (attachment == null || response != null) {
    return null
  }

  return (
    <StyledList>
      {
        attachment.payload.elements.map(({ title, image_url, buttons }, i) => (
          <StyledListItem key={i}>
            <StyledButton onClick={() => { reply(title, buttons[0].payload) }}>
              <ThumbnailPoster
                image={image_url}
                title={title}
              />
            </StyledButton>
          </StyledListItem>
        ))
      }
    </StyledList>
  )
}

Attachment.propTypes = {
  attachment: PropTypes.shape({
    payload: PropTypes.shape({
      element: PropTypes.array,
    }),
  }),
  reply: PropTypes.func,
  response: PropTypes.object,
}

export default Attachment
