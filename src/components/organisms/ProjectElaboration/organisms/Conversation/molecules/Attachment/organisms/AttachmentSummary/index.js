import React, { PropTypes, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import config from 'config'
import { theme } from 'utils/style'

import { ThumbnailPoster, ProjectElaborationQuestion, Paragraph, Link } from 'components'
import Question from './molecules/Question'
import Response from './molecules/Response'

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
  display: block;
  margin: ${theme('spaces.m')} 0 0 0;
  padding: ${theme('spaces.m')};
  min-width: 20rem;
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  letter-spacing: 0.05rem;
  text-align: center;
  background-color: ${theme('colors.secondary')};
  color: ${theme('colors.black')};
`

class AttachmentSummary extends Component {
  componentDidMount() {
    const { location: { basename, pathname }, redirectTo } = this.props

    redirectTo(`${basename}${pathname}#summary`)
    redirectTo(`${basename}${pathname}`)
  }

  render() {
    const { element: { title, image_url, subtitle, buttons }, locale } = this.props
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
      <div id="summary">
        <ProjectElaborationQuestion>
          <StyledParagraph><FormattedMessage id="project.elaboration.summary.title" /></StyledParagraph>
          <ThumbnailPoster
            // eslint-disable-next-line camelcase
            image={image_url}
            title={title}
          />
          {summary}
          <StyledLink to={validateButton.url.replace(config.locales[locale].url, '')}>{validateButton.title}</StyledLink>
        </ProjectElaborationQuestion>
      </div>
    )
  }
}

AttachmentSummary.propTypes = {
  locale: PropTypes.string,
  location: PropTypes.object.isRequired,
  redirectTo: PropTypes.func,
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
  }).isRequired,
}

export default AttachmentSummary
