import React from 'react'
import messages from 'utils/messages'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { cloudinaryUrl } from 'config'
import styled from 'styled-components'
import { breakpoint } from 'utils/style'

import { MainLayout, MainWrapper, InnerWrapper, Section, AutoValidationBlock, Link } from 'components'

const StyledLink = styled(Link)`
  width: 100%;

  ${breakpoint('s')`
    min-width: 40rem;
  `}
`

const ProjectValidationPage = ({ intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <Section>
          <AutoValidationBlock
            imageLink={`${cloudinaryUrl}autovalidation-validate.svg`}
            title={formatMessage(messages('auto-validation.validate.title').label)}
            paragraph={formatMessage(messages('auto-validation.validate.message').label)}
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
  intl: intlShape.isRequired,
}

export default injectIntl(ProjectValidationPage)
