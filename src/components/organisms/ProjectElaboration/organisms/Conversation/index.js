import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import Response from './atoms/Response'
import QuickReplies from './molecules/QuickReplies'
import Question from './molecules/Question'
import Attachment from './molecules/Attachment'

const Wrapper = styled.div`
  max-height: 400px;
  overflow: scroll;
  bottom: 0;
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
                  <div>
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
                  </div>
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
