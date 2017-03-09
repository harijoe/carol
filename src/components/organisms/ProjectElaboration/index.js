import React, { PropTypes } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import { Block, Heading } from 'components'
import Conversation from './Conversation'
import Form from './Form'

const ProjectElaboration = ({ conversation, reply }) => {
  const quickReplies = conversation[conversation.length - 1].message.quick_replies

  return (
    <Block>
      <Heading><FormattedMessage id="project.elaboration.title" /></Heading>
      <Conversation conversation={conversation} reply={reply} />
      <Form reply={reply} disabled={quickReplies.length !== 0} />
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

export default injectIntl(ProjectElaboration)
