import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

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

const ProjectElaboration = ({
  activeConversation,
  conversations,
  reply,
  selectConversation,
  hasConversations,
  locale,
  redirectTo,
  location,
}) => {
  const quickReplies = activeConversation.length > 0 ? activeConversation[activeConversation.length - 1].message.quick_replies : null

  return (
    <StyledGrid narrow>
      {
        hasConversations ?
          <ul style={{ marginTop: 100 }}>
            <p><FormattedMessage id="project.elaboration.choose_conversation" /></p>
            {
              Object.keys(conversations).map((authType, i) => (
                <li key={i}>
                  <button onClick={() => selectConversation(authType)}>{authType}</button>
                </li>
              ))
            }
          </ul>
          :
          <div>
            <Conversation {...{ activeConversation, reply, locale, redirectTo, location }} />
            <Form reply={reply} disabled={quickReplies != null ? quickReplies.length !== 0 : true} />
          </div>
      }
    </StyledGrid>
  )
}

ProjectElaboration.propTypes = {
  activeConversation: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.shape({
        quick_replies: PropTypes.array,
      }),
      answer: PropTypes.string,
    }),
  ),
  reply: PropTypes.func,
  redirectTo: PropTypes.func,
  selectConversation: PropTypes.func,
  conversations: PropTypes.object,
  location: PropTypes.object.isRequired,
  hasConversations: PropTypes.bool,
  locale: PropTypes.string,
}

export default ProjectElaboration
