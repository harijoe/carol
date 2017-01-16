import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Firm } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const FirmList = ({ list, loading, ...props }) => (
  <Wrapper {...props}>
    {loading && <div>Loading...</div>}
    {list.map((items, i) =>
      <Firm
        key={i}
        loading={loading}
        items={items}
      />
    )}
  </Wrapper>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
}

export default FirmList
