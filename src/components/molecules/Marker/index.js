import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components'

const StyledIcon = styled(Icon)`
  position: 'absolute';
  width: 2em;
  height: 2em;
`

const Marker = () => (
  <StyledIcon icon="marker-window" />
)

export default Marker
