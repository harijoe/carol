import React from 'react'
import PropTypes from 'prop-types'
import { FormattedHTMLMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled from 'styled-components'
import { theme } from 'utils/style'
import cloudinary from 'utils/cloudinary'

import { MainLayout, MainWrapper, Section, AutoValidationBlock } from 'components'
import { ProjectAccountForm } from 'containers'

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
