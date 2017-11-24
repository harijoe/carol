import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import selectImageSizeFromMeta from 'utils/selectImageSizeFromMeta'
import truncate from 'utils/truncate'

import { Card, Link } from 'components'

const StyledCardBody = styled(Card.Body)`
  &, &.qs-Card-body {
    padding-top: ${theme('spaces.xl')};
  }
`

const StyledCardTitle = styled(Card.Title)`
  font-size: ${theme('fonts.size.xl')};
`

const WpCard = ({ title, image, imageMeta, label, className, link, ...props }) =>
  <Link to={link} target="_blank" title={title}>
    <Card className={className} padding="fluid" {...props}>
      <Card.Header>
        <Card.Image image={{ src: selectImageSizeFromMeta(image, imageMeta, '300'), alt: title }} />
        <Card.Tag label={label} type="faq" position="above" />
      </Card.Header>
      <StyledCardBody>
        <StyledCardTitle title={truncate(title, 40)} />
      </StyledCardBody>
    </Card>
  </Link>

WpCard.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageMeta: PropTypes.object,
  className: PropTypes.string,
}

export default WpCard
