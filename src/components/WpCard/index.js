import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import selectImageSizeFromMeta from 'utils/selectImageSizeFromMeta'
import truncate from 'utils/truncate'

import Card from 'components/Card'
import Link from 'components/Link'

const StyledCardBody = styled(Card.Body)`
  &, &.qs-Card-body {
    padding-top: ${theme('spaces.xl')};
  }
`

const StyledCardTitle = styled(Card.Title)`
  font-size: ${theme('fonts.size.xl')};
`

const WpCard = ({ title, image, imageMeta, themeInspirations, className, themeColor, themeIconUrl, link, ...props }) =>
  <Link to={link} target="_blank" title={title}>
    <Card className={className} padding="fluid" {...props}>
      <Card.Header>
        <Card.Image image={{ src: selectImageSizeFromMeta(image, imageMeta, '300'), alt: title }} />
        <Card.Tag themeInspirations={themeInspirations} type="inspirations" position="above" themeColor={themeColor} themeIconUrl={themeIconUrl} />
      </Card.Header>
      <StyledCardBody>
        <StyledCardTitle title={truncate(title, 40)} />
      </StyledCardBody>
    </Card>
  </Link>

WpCard.propTypes = {
  title: PropTypes.string.isRequired,
  themeInspirations: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  themeColor: PropTypes.string.isRequired,
  themeIconUrl: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageMeta: PropTypes.object,
  className: PropTypes.string,
}

export default WpCard
