import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
  font-size: 1.8rem;
  margin: 1.8rem 0;
`

const Feature = ({ name, enabled, onClick }) =>
  <StyledRow>
    <label htmlFor={name}>
      <input
        id={name}
        type="checkbox"
        checked={enabled}
        onChange={onClick}
      /> {name}
    </label>
  </StyledRow>

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Feature
