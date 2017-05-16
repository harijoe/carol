import React from 'react'
import styled from 'styled-components'

import { MainLayout, Card } from 'components'
import { EmailForm } from 'containers'

const StyledCard = styled(Card)`
  margin-top: 200px;
`

const EmailValidationPage = () => (
  <MainLayout>
    <StyledCard>
      <EmailForm />
    </StyledCard>
  </MainLayout>
)

export default EmailValidationPage
