import React, { PropTypes } from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'
import { cloudinaryUrl } from 'config'

import { MainLayout, MainWrapper, HeroSection, Section, Grid } from 'components'
import { ProjectAccountForm } from 'containers'

const StyledMainWrapper = styled(MainWrapper)`
  padding-top: 5.6rem;
  background-color: ${theme('colors.white')};
`

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
    <StyledMainWrapper>
      <StyledHeroSection title={formatMessage(messages('project.validation_page').label)} imageLink={`${cloudinaryUrl}hero-fullscreen_image.jpg`} />
      <Section light>
        <StyledGrid>
          <FormattedMessage id="project.validation.describe" />
        </StyledGrid>
      </Section>
      <ProjectAccountForm {...{ projectId }} />
    </StyledMainWrapper>
  </MainLayout>
)

ProjectAccountPage.propTypes = {
  intl: intlShape.isRequired,
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default injectIntl(ProjectAccountPage)
