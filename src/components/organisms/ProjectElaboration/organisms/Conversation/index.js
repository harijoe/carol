import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, mapBreakpoints } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { ProjectElaborationQuestion, RichTextContent } from 'components'
import Answer from './atoms/Answer'
import QuickReplies from './molecules/QuickReplies'
import Attachment from './molecules/Attachment'

const Wrapper = styled.div`
  bottom: 0;
  margin: 0 auto;
  margin-bottom: 5.6rem;
  max-height: calc(100vh - 18.5rem);
  width: 100%;
  max-width: 80rem;
  overflow-y: auto;
  overflow-x: hidden;

  ${breakpoint('m')`
    min-height: 29rem;
  `} ${mapBreakpoints(
      bp => css`
    padding-left: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
    padding-right: ${theme(`grid.gutterWidth.${bp}`, 'rem')};
  `,
    )} &::-webkit-scrollbar-track {
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

class Conversation extends Component {
  static propTypes = {
    locale: PropTypes.string,
    translate: PropTypes.func,
    activeConversation: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.shape({
          text: PropTypes.string,
          quick_replies: PropTypes.array,
        }),
        answer: PropTypes.shape({
          text: PropTypes.string,
          payload: PropTypes.string,
        }),
      }),
    ),
    reply: PropTypes.func,
    redirectTo: PropTypes.func,
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
    const { activeConversation, reply, locale, redirectTo, translate } = this.props
    const isLastQuestion = index => activeConversation.length - 1 === index
    const introBubbles = translate('chatbot.intro').split(/(?:<br>\n){2,}/)

    return (
      <Wrapper
        innerRef={ref => {
          this.history = ref
        }}
        className="conversation"
      >
        {introBubbles.map(content => <div>
          <ProjectElaborationQuestion>
            <RichTextContent content={content} />
          </ProjectElaborationQuestion>
        </div>)}
        {activeConversation.map(({ message: { text, attachment, quick_replies, image_url }, answer }, index) =>
          <div key={index}>
            { // eslint-disable-next-line camelcase
              <ProjectElaborationQuestion imageUrl={image_url}>
                {text != null ? text : null}
              </ProjectElaborationQuestion>}
            {isLastQuestion(index)
              ? <div>
                  <Attachment attachment={attachment != null ? attachment : null} {...{ reply, answer, locale, redirectTo }} />
                  <QuickReplies
                    // eslint-disable-next-line camelcase
                    {...{ quick_replies, reply, answer }}
                  />
                </div>
              : null}
            <Answer answer={answer != null ? answer.text : null} />
          </div>,
        )}
      </Wrapper>
    )
  }
}

export default injectTranslate(Conversation)
