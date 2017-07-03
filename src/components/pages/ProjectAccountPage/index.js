import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import messages from 'utils/messages'
import { breakpoint } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { MainLayout, MainWrapper, HeroSection, Section, Grid } from 'components'
import { ProjectAccountForm } from 'containers'

const StyledHeroSection = styled(HeroSection)`
  > section {
    ${breakpoint('m')`
      max-width: 60rem;
    `}
  }
`

const StyledGrid = styled(Grid)`
  margin-left: auto;
  margin-right: auto;

  ${breakpoint('m')`
    max-width: 55rem;
  `}

  ${breakpoint('xl')`
    max-width: 50rem;
  `}
`

const ProjectAccountPage = ({ params: { projectId }, intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <StyledHeroSection title={formatMessage(messages('project.validation_page').label)} imageLink={`${cloudinaryUrl}hero-fullscreen_image.jpg`} />
      <Section light>
        <StyledGrid>
          <FormattedMessage id="project.validation.describe" />
        </StyledGrid>
      </Section>
      <ProjectAccountForm {...{ projectId }} />
    </MainWrapper>
  </MainLayout>
)

ProjectAccountPage.propTypes = {
  intl: intlShape.isRequired,
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default injectIntl(ProjectAccountPage)
