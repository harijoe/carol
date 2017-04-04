import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import Response from './atoms/Response'
import QuickReplies from './molecules/QuickReplies'
import Question from './molecules/Question'
import Attachment from './molecules/Attachment'

const Wrapper = styled.div`
  bottom: 0;
  display:flex;
  flex-direction: column;
  max-height: 67vh;
  width: 100%;
  overflow-y: auto;

  ${breakpoint('m')`
    min-height: 29rem;
    max-height: 80rem;
  `}

  &::-webkit-scrollbar-track {
    border-radius: 6rem;
    background-color: ${theme('colors.grayscale.lightest')};
  }
  &::-webkit-scrollbar {
    height: ${theme('spaces.xs')};
    width: ${theme('spaces.xs')};
    background-color: ${theme('colors.grayscale.lightest')};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6rem;
    background-color: ${theme('colors.grayscale.light')};
  }
`

const Block = styled.div`
  position: relative;

  ${breakpoint('l')`
    height: 25rem;

    &::before {
      position: absolute;
      left: 0;
      height: 100%;
      width: ${theme('spaces.l')};
      background: linear-gradient(to right, ${theme('colors.grayscale.lightest')}, rgba(249, 249, 249, 0));
      content: '';
    }
  `}
`

class Conversation extends Component {
  static propTypes = {
    conversation: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.shape({
          text: PropTypes.string,
          quick_replies: PropTypes.array,
        }),
        response: PropTypes.shape({
          text: PropTypes.string,
          payload: PropTypes.string,
        }),
      }),
    ),
    reply: PropTypes.func,
  }

  componentDidMount() {
    this.scrollTop()
  }

  componentDidUpdate() {
    this.scrollTop()
  }

  scrollTop() {
    this.history.scrollTop = this.history.scrollHeight
  }

  render() {
    const { conversation, reply } = this.props
    const isLastQuestion = index => (
      conversation.length - 1 === index
    )

    return (
      <Wrapper innerRef={(ref) => { this.history = ref }}>
        {
          conversation.map(({ message: { text, attachment, quick_replies }, response }, index) => (
            <div key={index}>
              <Question question={text || null} />
              {
                isLastQuestion(index) ?
                  <Block>
                    <Attachment
                      attachment={attachment || null}
                      reply={reply}
                      response={response}
                    />
                    <QuickReplies
                      // eslint-disable-next-line camelcase
                      quick_replies={quick_replies}
                      reply={reply}
                      response={response}
                    />
                  </Block>
                  : null
              }
              <Response response={response != null ? response.text : null} />
            </div>
          ))
        }
      </Wrapper>
    )
  }
}

export default Conversation
