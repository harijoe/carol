import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'react-intl'

import { MainLayout, Card } from 'components'

const StyledCard = styled(Card)`
  margin-top: 200px;
`

const EmailValidationSentPage = () => (
  <MainLayout>
    <StyledCard>
      <FormattedMessage id="user.email.sent" />
    </StyledCard>
  </MainLayout>
)

export default injectIntl(EmailValidationSentPage)
