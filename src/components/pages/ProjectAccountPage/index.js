import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled from 'styled-components'
import { breakpoint } from 'utils/style'
import cloudinary from 'utils/cloudinary'

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

const ProjectAccountPage = ({ params: { projectId }, translate }) => (
  <MainLayout>
    <MainWrapper>
      <StyledHeroSection title={translate('project.validation_page')} imageLink={cloudinary('/hero-fullscreen_image.jpg')} />
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
  translate: PropTypes.func.isRequired,
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default injectTranslate(ProjectAccountPage)
