import React from 'react'
import PropTypes from 'prop-types'

import ThumbnailCard from 'components/ThumbnailCard'
import ThumbnailPoster from 'components/ThumbnailPoster'

const Key2Thumbnail = ({ title, imageUrl, subtitle }) =>
  subtitle
    ? <ThumbnailCard image={imageUrl} title={title} items={subtitle.split('\n')} />
    : <ThumbnailPoster image={{ src: imageUrl, alt: title }} title={title} height="m" />

Key2Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Key2Thumbnail
