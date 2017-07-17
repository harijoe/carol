import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'
import styled from 'styled-components'
import { breakpoint } from 'utils/style'

import { MainLayout, MainWrapper, InnerWrapper, Section, AutoValidationBlock, Link } from 'components'

const StyledLink = styled(Link)`
  width: 100%;

  ${breakpoint('s')`
    min-width: 40rem;
  `}
`

const ProjectValidationPage = ({ translate }) => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
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
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

ProjectValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ProjectValidationPage)
