import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Firm, Loading } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const FirmDetails = ({ details, loading }) => (
  <Wrapper>
    <Loading loading={loading}>
      <Firm
        items={details}
        full="true"
      />
    </Loading>
  </Wrapper>
)

FirmDetails.propTypes = {
  details: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

export default FirmDetails
