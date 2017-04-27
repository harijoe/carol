import React, { PropTypes } from 'react'

import AttachmentGeneric from './organisms/AttachmentGeneric'
import AttachmentSummary from './organisms/AttachmentSummary'

const Attachment = ({ attachment, reply, response }) => {
  if (
    attachment == null
    || attachment.payload == null
    || !Array.isArray(attachment.payload.elements)
    || attachment.payload.elements.length === 0
    || response != null
  ) {
    return null
  }

  switch (attachment.payload.template_type) {
    case 'generic.summary':
      return (
        <AttachmentSummary element={attachment.payload.elements[0]} />
      )
    default:
    case 'generic':
      return (
        <AttachmentGeneric attachment={attachment} reply={reply} />
      )
  }
}

Attachment.propTypes = {
  attachment: PropTypes.shape({
    payload: PropTypes.shape({
      elements: PropTypes.array,
    }),
  }),
  reply: PropTypes.func,
  response: PropTypes.object,
}

export default Attachment
