import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: right;
  text-align: right;
  padding: 5px 10px;
  background: #00f;
  border-radius: 10px;
  color: #fff;
  max-width: 50%;
  overflow-wrap: break-word;
`

const Response = ({ response }) => {
  if (response == null) {
    return null
  }

  return (
    <Wrapper>
      {response}
    </Wrapper>
  )
}

Response.propTypes = {
  response: PropTypes.string,
}

export default Response
