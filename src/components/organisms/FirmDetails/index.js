import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Firm } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const FirmDetails = ({ details, loading, ...props }) => (
  <Wrapper {...props}>
    {loading && <div>Loading...</div>}
    <Firm
      loading={loading}
      items={details}
      full="true"
    />
  </Wrapper>
)

FirmDetails.propTypes = {
  details: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

export default FirmDetails
