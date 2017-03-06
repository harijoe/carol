import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Firm, Loading } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const FirmList = ({ list, loading }) => (
  <Wrapper>
    <Loading loading={loading}>
      {list.map((items, i) =>
        <Firm
          key={i}
          items={items}
        />
      )}
    </Loading>
  </Wrapper>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
}

export default FirmList
