import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'
import pushGtmEvent from 'utils/gtm'

import ThumbnailPoster from 'components/ThumbnailPoster'
import ProjectElaborationQuestion from 'components/ProjectElaborationQuestion'
import Paragraph from 'components/Paragraph'
import ValidateProjectButton from 'containers/ValidateProjectButton'
import Question from './molecules/Question'
import Answer from './molecules/Answer'

const SummaryTitle = styled(Paragraph)`
  margin-bottom: ${theme('spaces.m')};
  font-weight: bold;
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
    `};
  }
`

const Wrapper = styled.div`
  padding-top: 5.6rem;
  > div > div {
    max-width: 80%;

    ${breakpoint('m')`
      max-width: 50%;
    `};
  }
`

class AttachmentSummary extends Component {
  componentDidMount() {
    const { redirectTo, key2 } = this.props
    pushGtmEvent({ event: 'ChatbotKey2Created', chatbotKey2: key2 })
    redirectTo('/project-elaboration#summary')
  }

  render() {
    const { element: { title, image_url, subtitle, buttons } } = this.props
    const validateButtonDetails = buttons[0]

    /*
     * subtitle contains all the summary in one block. So, we have to split questions (odd) and answers (even)
     */
    const summary = subtitle.split('\n').map(
      (message, i) =>
        i % 2
          ? <Answer key={i}>
              {message}
            </Answer>
          : <Question key={i}>
              {message}
            </Question>,
    )

    const validateProjectLink = <ValidateProjectButton title={validateButtonDetails.title} url={validateButtonDetails.url} />

    return (
      <Wrapper id="summary">
        <ProjectElaborationQuestion>
          <SummaryTitle>
            <FormattedMessage id="project.elaboration.summary.title" />
          </SummaryTitle>
          {validateProjectLink}
          <StyledParagraph>
            <FormattedMessage id="project.elaboration.summary.subtitle" />
          </StyledParagraph>
          { // eslint-disable-next-line camelcase
            image_url && <StyledThumbnailPosterWrapper>
            <ThumbnailPoster
              // eslint-disable-next-line camelcase
              image={{ src: image_url }}
              title={title}
            />
          </StyledThumbnailPosterWrapper>}
          {summary}
          {validateProjectLink}
        </ProjectElaborationQuestion>
      </Wrapper>
    )
  }
}

AttachmentSummary.propTypes = {
  redirectTo: PropTypes.func,
  key2: PropTypes.string,
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
  }).isRequired,
}

export default AttachmentSummary
