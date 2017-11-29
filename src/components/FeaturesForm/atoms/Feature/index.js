import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
  font-size: 1.8rem;
  margin: 1.8rem 0;
`

const Description = styled.span`
  font-size: 1.4rem;
  color: grey;
`

const Feature = ({ name, enabled, description, onClick }) =>
  <StyledRow>
    <label htmlFor={name}>
      <input
        id={name}
        type="checkbox"
        checked={enabled}
        onChange={onClick}
      /> {name} - <Description>{description}</Description>
    </label>
  </StyledRow>

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Feature
