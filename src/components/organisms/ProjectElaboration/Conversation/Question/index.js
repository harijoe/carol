import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Image } from 'components'

const Wrapper = styled.div`
  float: left;
  width: 100%;
  text-align: left;
`

const StyledImage = styled(Image)`
  float: left;
`

const BubbleQuestion = styled.p`
  float: left;
  padding: 5px 10px;
  background: #d8d8d8;
  border-radius: 10px;
  max-width: 50%;
  overflow-wrap: break-word;
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
