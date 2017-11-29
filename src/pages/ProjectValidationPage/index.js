import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'
import styled from 'styled-components'
import { breakpoint } from 'utils/style'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Section from 'components/Section'
import AutoValidationBlock from 'components/AutoValidationBlock'
import Link from 'components/Link'

const StyledLink = styled(Link)`
  width: 100%;

  ${breakpoint('s')`
    min-width: 40rem;
  `}
`

const ProjectValidationPage = ({ translate }) =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Section>
        <AutoValidationBlock
          imageLink={cloudinary('/autovalidation-validate.svg')}
          title={translate('auto-validation.validate.title')}
          paragraph={translate('auto-validation.validate.message')}
        >
          <StyledLink to="/projects" button>
            <FormattedMessage id="auto-validation.validate.call_to_action" />
          </StyledLink>
        </AutoValidationBlock>
      </Section>
    </MainWrapper>
  </MainLayout>

ProjectValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ProjectValidationPage)
