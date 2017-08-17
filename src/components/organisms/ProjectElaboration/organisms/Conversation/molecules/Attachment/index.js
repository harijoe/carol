import React from 'react'
import PropTypes from 'prop-types'
import AttachmentSummary from 'containers/AttachmentSummary'

import AttachmentGeneric from './organisms/AttachmentGeneric'

const Attachment = ({ attachment, reply, answer, locale, redirectTo }) => {
  if (
    attachment == null ||
    attachment.payload == null ||
    !Array.isArray(attachment.payload.elements) ||
    attachment.payload.elements.length === 0 ||
    answer != null
  ) {
    return null
  }

  switch (attachment.payload.template_type) {
    case 'generic.summary':
      return <AttachmentSummary element={attachment.payload.elements[0]} {...{ locale, redirectTo }} />
    default:
    case 'generic':
      return <AttachmentGeneric {...{ attachment, reply }} />
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
  answer: PropTypes.object,
  locale: PropTypes.string,
}

export default Attachment
