import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

import { Block, Heading } from 'components'
import Conversation from './organisms/Conversation'
import Form from './organisms/Form'

const ProjectElaboration = ({ conversation, reply }) => {
  const quickReplies = conversation.length > 0 ? conversation[conversation.length - 1].message.quick_replies : null

  return (
    <Block>
      <Heading><FormattedMessage id="project.elaboration.title" /></Heading>
      <Conversation conversation={conversation} reply={reply} />
      <Form reply={reply} disabled={quickReplies != null ? quickReplies.length !== 0 : true} />
    </Block>
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
