import React from 'react'
import styled from 'styled-components'

import { MainLayout, Card } from 'components'
import { PhoneForm, PhoneAlreadyVerified } from 'containers'

const StyledCard = styled(Card)`
  margin-top: 200px;
`

const PhoneValidationPage = () => (
  <MainLayout>
    <StyledCard>
      <PhoneAlreadyVerified>
        <PhoneForm />
      </PhoneAlreadyVerified>
    </StyledCard>
  </MainLayout>
)

export default PhoneValidationPage
