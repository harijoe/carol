import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Card } from 'components'

const StyledCard = styled(Card)`
  background: ${theme('colors.grayscale.darker')};
`

const FaqCard = ({ title, label, className, ...props }) =>
  <StyledCard className={className} padding="fluid-small" {...props}>
    <Card.Body>
      <Card.Title title={title} light />
    </Card.Body>
    <Card.Footer>
      <Card.Tag label={label} type="faq" />
    </Card.Footer>
  </StyledCard>

FaqCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default FaqCard
