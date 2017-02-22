import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Image } from 'components'

const Wrapper = styled.div`
  float: left;
  width: 100%;
  textAlign: left;
`

const StyledImage = styled(Image)`
  float: left;
`

const BubbleQuestion = styled.p`
  float: left;
  padding: 5px 10px;
  background: #D8D8D8;
  borderRadius: 10px;
  maxWidth: 50%;
  overflowWrap: break-word;
`
BubbleQuestion.displayName = 'BubbleQuestion'

const Question = ({ question }) => {
  if (question == null) {
    return null
  }

  return (
    <Wrapper>
      <StyledImage
        alt="quotatis"
        src={require('./logo.png')}
        width="40"
      />
      <BubbleQuestion>{question}</BubbleQuestion>
    </Wrapper>
  )
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
}

export default Question
