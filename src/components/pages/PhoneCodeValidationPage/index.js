import React from 'react'
import styled from 'styled-components'
import { FormattedMessage, injectIntl } from 'react-intl'

import { MainLayout, Link, Card } from 'components'
import { PhoneCodeForm, PhoneAlreadyVerified } from 'containers'

const StyledCard = styled(Card)`
  margin-top: 200px;
`

const PhoneCodeValidationPage = () => (
  <MainLayout>
    <StyledCard>
      <PhoneAlreadyVerified>
        <PhoneCodeForm />
        <Link to="/validation/phone"><FormattedMessage id="user.change_phone_number" /></Link>
      </PhoneAlreadyVerified>
    </StyledCard>
  </MainLayout>
)

export default injectIntl(PhoneCodeValidationPage)
