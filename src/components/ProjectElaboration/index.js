import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isFirstChatbotStep from 'utils/isFirstChatbotStep'
import { breakpoint } from 'utils/style'

import Grid from 'components/Grid'
import Conversation from './containers/Conversation'
import Form from './organisms/Form'

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 0;
  padding-top: 5.6rem;
  background: white;

  ${breakpoint('l')`
    max-width: none;
  `};
`

const ProjectElaboration = ({ activeConversation, reply }) => {
  const quickReplies = activeConversation.length > 0 ? activeConversation[activeConversation.length - 1].message.quick_replies : null
  const enableBack = !isFirstChatbotStep(activeConversation)

  return (
    <StyledGrid narrow>
      <div>
        <Conversation {...{ activeConversation, reply }} />
        <Form reply={reply} disabled={quickReplies != null ? quickReplies.length !== 0 : true} enableBack={enableBack} />
      </div>
    </StyledGrid>
  )
}

ProjectElaboration.propTypes = {
  activeConversation: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        quick_replies: PropTypes.array,
      }),
      answer: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  ),
  reply: PropTypes.func,
}

export default ProjectElaboration
