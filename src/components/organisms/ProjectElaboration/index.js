import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Grid } from 'components'
import Conversation from './organisms/Conversation'
import Form from './organisms/Form'

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 0;
  padding-top: 5.6rem;
`


const ProjectElaboration = ({ conversation, reply }) => {
  const quickReplies = conversation.length > 0 ? conversation[conversation.length - 1].message.quick_replies : null

  return (
    <StyledGrid narrow>
      <Conversation conversation={conversation} reply={reply} />
      <Form reply={reply} disabled={quickReplies != null ? quickReplies.length !== 0 : true} />
    </StyledGrid>
  )
}

ProjectElaboration.propTypes = {
  conversation: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        quick_replies: PropTypes.array,
      }),
    }),
  ),
  reply: PropTypes.func,
}

export default ProjectElaboration
