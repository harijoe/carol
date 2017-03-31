import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, List, ListItem, Image, Button } from 'components'

const StyledListItem = styled(ListItem)`
  width: 33%;
  display: inline-block;
`
const StyledList = styled(List)`
  float: left;
  width: 100%;
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
            <Button onClick={() => { reply(title, buttons[0].payload) }}>
              <Heading>{title}</Heading>
              <Image
                // eslint-disable-next-line camelcase
                src={image_url}
              />
            </Button>
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
