import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  float: right;
  textAlign: right;
  padding: 5px 10px;
  background: #0000FF;
  borderRadius: 10px;
  color: #FFF;
  maxWidth: 50%;
  overflowWrap: break-word;
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
