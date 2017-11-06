import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Card, Link } from 'components'

const StyledCardBody = styled(Card.Body)`
  &, &.qs-Card-body {
    padding-top: ${theme('spaces.xl')};
  }
`

const StyledCardTitle = styled(Card.Title)`
  font-size: ${theme('fonts.size.xl')};
`

const WpCard = ({ title, image, label, className, link, ...props }) =>
  <Link to={link} target="_blank">
    <Card className={className} padding="fluid" {...props}>
      <Card.Header>
        <Card.Image image={image} />
        <Card.Tag label={label} type="faq" position="above" />
      </Card.Header>
      <StyledCardBody>
        <StyledCardTitle title={title} />
      </StyledCardBody>
    </Card>
  </Link>

WpCard.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default WpCard
