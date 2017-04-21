import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { Button, ThumbnailPoster, ProjectElaborationQuestion, Paragraph } from 'components'
import Question from './molecules/Question'
import Response from './molecules/Response'

const StyledButton = styled(Button)`
  margin: 0 auto;
`
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px
`

const AttachmentSummary = ({ element: { title, image_url, subtitle, buttons }, goToPreValidatePage }) => {
  const validateButton = buttons[0]

  /*
   * subtitle contains all the summary in one block. So, we have to split questions (odd) and responses (even)
   */
  const summary = subtitle.split('\n').map(((message, i) => (
    (i % 2) ?
      <Response key={i}>{message}</Response>
      :
      <Question key={i}>{message}</Question>
  )))

  return (
    <ProjectElaborationQuestion>
      <StyledParagraph><FormattedMessage id="project.elaboration.summary.title" /></StyledParagraph>
      <ThumbnailPoster
        // eslint-disable-next-line camelcase
        image={image_url}
        title={title}
      />
      {summary}
      <StyledButton onClick={() => goToPreValidatePage(validateButton.url)}>{validateButton.title}</StyledButton>
    </ProjectElaborationQuestion>
  )
}

AttachmentSummary.propTypes = {
  goToPreValidatePage: PropTypes.func,
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
  }).isRequired,
}

export default AttachmentSummary
