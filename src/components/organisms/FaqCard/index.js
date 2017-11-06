import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Card, Link } from 'components'

const StyledCard = styled(Card)`
  background: ${theme('colors.grayscale.darker')};
`

const FaqCard = ({ title, label, className, link, ...props }) =>
  <Link to={link} target="_blank">
    <StyledCard className={className} padding="fluid-small" {...props}>
      <Card.Body>
        <Card.Title title={title} light />
      </Card.Body>
      <Card.Footer>
        <Card.Tag label={label} type="faq" />
      </Card.Footer>
    </StyledCard>
  </Link>

FaqCard.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default FaqCard
