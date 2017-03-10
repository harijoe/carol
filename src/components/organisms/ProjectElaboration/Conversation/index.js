import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import Question from './Question'
import Response from './Response'
import QuickReplies from './QuickReplies'

const Wrapper = styled.div`
  maxHeight: 400px;
  overflow: scroll;
  bottom: 0;
`

class Conversation extends Component {
  static propTypes = {
    conversation: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.shape({
          text: PropTypes.string.isRequired,
          quick_replies: PropTypes.array,
        }).isRequired,
        response: PropTypes.string,
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

    return (
      <Wrapper innerRef={(ref) => { this.history = ref }}>
        {
          conversation.map((field, index) => (
            <div key={index}>
              <Question question={field.message.text} />
              {
                conversation.length - 1 === index ?
                  <QuickReplies
                    quick_replies={field.message.quick_replies}
                    reply={reply}
                    response={field.response}
                  />
                  : null
              }
              <Response response={field.response} />
            </div>
          ))
        }
      </Wrapper>
    )
  }
}

export default Conversation
