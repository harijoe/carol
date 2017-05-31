import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import config from 'config'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { ThumbnailPoster, ProjectElaborationQuestion, Paragraph, Link } from 'components'
import Question from './molecules/Question'
import Answer from './molecules/Answer'

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
    const { element: { title, image_url, subtitle, buttons }, locale } = this.props
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

    return (
      <Wrapper id="summary">
        <ProjectElaborationQuestion>
          <StyledParagraph><FormattedMessage id="project.elaboration.summary.title" /></StyledParagraph>
          <StyledThumbnailPosterWrapper>
            <ThumbnailPoster
              // eslint-disable-next-line camelcase
              image={image_url}
              title={title}
            />
          </StyledThumbnailPosterWrapper>
          {summary}
          <StyledLink to={validateButton.url.replace(config.locales[locale].url, '')} button>{validateButton.title}</StyledLink>
        </ProjectElaborationQuestion>
      </Wrapper>
    )
  }
}

AttachmentSummary.propTypes = {
  locale: PropTypes.string,
  redirectTo: PropTypes.func,
  element: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
  }).isRequired,
}

export default AttachmentSummary
