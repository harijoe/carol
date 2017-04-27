import React from 'react'
import PropTypes from 'prop-types'

import AttachmentGeneric from './organisms/AttachmentGeneric'
import AttachmentSummary from './organisms/AttachmentSummary'

const Attachment = ({ attachment, reply, response, locale, redirectTo, location }) => {
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
        <AttachmentSummary element={attachment.payload.elements[0]} {...{ locale, redirectTo, location }} />
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
  redirectTo: PropTypes.func,
  response: PropTypes.object,
  location: PropTypes.object.isRequired,
  locale: PropTypes.string,
}

export default Attachment
