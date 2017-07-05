import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import config from 'config'
import styled from 'styled-components'
import pushGtmEvent from 'utils/gtm'
import { theme, breakpoint } from 'utils/style'

import { ThumbnailPoster, ProjectElaborationQuestion, Paragraph, Link } from 'components'
import Question from './molecules/Question'
import Answer from './molecules/Answer'

const SummaryTitle = styled(Paragraph)`
  margin-bottom: ${theme('spaces.m')};
  font-family: ${theme('fonts.family.montserratBold')};
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${theme('spaces.m')};
`

const StyledThumbnailPosterWrapper = styled.div`
  margin-left: -${theme('spaces.m')};
  margin-right: -${theme('spaces.m')};

  figure {
    justify-content: center;
    height: 14rem;

    ${breakpoint('m')`
      height: 18rem;
    `}
  }
`

const Wrapper = styled.div`
  padding-top: 5.6rem;
  > div > div {
    max-width: 80%;

    ${breakpoint('m')`
      max-width: 50%;
    `}
  }
`

const StyledLink = styled(Link)`
  margin-bottom: ${theme('spaces.s')};
  min-width: 100%;
`

class AttachmentSummary extends Component {
  componentDidMount() {
    const { redirectTo } = this.props

    redirectTo('/project-elaboration#summary')
  }

  render() {
    const { element: { title, image_url, subtitle, buttons }, locale, heroAnswer: { text } } = this.props
    const validateButton = buttons[0]

    /*
     * subtitle contains all the summary in one block. So, we have to split questions (odd) and answers (even)
     */
    const summary = subtitle.split('\n').map(((message, i) => (
      (i % 2) ?
        <Answer key={i}>{message}</Answer>
        :
        <Question key={i}>{message}</Question>
    )))

    const validateProjectLink = (<StyledLink
      onClick={() => pushGtmEvent({
        event: 'FormCreated',
        chatbotKey1: text,
      })}
      to={validateButton.url.replace(config.locales[locale].url, '')}
      button
    >
      {validateButton.title}
    </StyledLink>)

    return (
      <Wrapper id="summary">
        <ProjectElaborationQuestion>
          <SummaryTitle><FormattedMessage id="project.elaboration.summary.title" /></SummaryTitle>
          {validateProjectLink}
          <StyledParagraph><FormattedMessage id="project.elaboration.summary.subtitle" /></StyledParagraph>
          <StyledThumbnailPosterWrapper>
            <ThumbnailPoster
              // eslint-disable-next-line camelcase
              image={{ src: image_url }}
              title={title}
            />
          </StyledThumbnailPosterWrapper>
          {summary}
          {validateProjectLink}
        </ProjectElaborationQuestion>
      </Wrapper>
    )
  }
}

AttachmentSummary.propTypes = {
  locale: PropTypes.string,
  redirectTo: PropTypes.func,
  heroAnswer: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
  }).isRequired,
}

export default AttachmentSummary
