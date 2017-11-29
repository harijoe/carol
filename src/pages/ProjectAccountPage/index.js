import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled from 'styled-components'
import { theme } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Section from 'components/Section'
import AutoValidationBlock from 'components/AutoValidationBlock'
import ProjectAccountForm from 'containers/ProjectAccountForm'

const StyledSection = styled(Section)`
  margin-top: ${theme('spaces.xxl')};
`

const ProjectAccountPage = ({ params: { projectId }, translate }) =>
  <MainLayout>
    <MainWrapper>
      <StyledSection>
        <AutoValidationBlock
          imageLink={cloudinary('/autovalidation-enrichingform.svg')}
          title={translate('project.validation_page')}
          paragraph={<FormattedHTMLMessage id="project.validation.describe" />}
        >
          <ProjectAccountForm {...{ projectId }} />
        </AutoValidationBlock>
      </StyledSection>
    </MainWrapper>
  </MainLayout>

ProjectAccountPage.propTypes = {
  translate: PropTypes.func.isRequired,
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default injectTranslate(ProjectAccountPage)
