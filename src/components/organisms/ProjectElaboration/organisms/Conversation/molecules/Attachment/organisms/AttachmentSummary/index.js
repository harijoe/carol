import React, { PropTypes } from 'react'

import { ThumbnailPoster, Paragraph } from 'components'

const AttachmentSummary = ({ element: { title, image_url, subtitle } }) => (
  <div>
    <ThumbnailPoster
      // eslint-disable-next-line camelcase
      image={image_url}
      title={title}
    />
    <Paragraph>{subtitle}</Paragraph>
  </div>
)

AttachmentSummary.propTypes = {
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}

export default AttachmentSummary
