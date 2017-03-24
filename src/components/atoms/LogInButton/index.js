import React from 'react'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const StyledIcon = styled(Icon)`
  color: ${theme('colors.white')};
  margin: 0;
  padding-top: 0;
`

const LogInButton = () => (
  <StyledIcon size={32} icon="login" />
)

export default LogInButton
