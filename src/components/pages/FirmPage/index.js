import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

import { MainLayout, MainWrapper } from 'components'
import { FirmDetails } from 'containers'

const StyledMainWrapper = styled(MainWrapper)`
  ${breakpointMax('m')`
    padding-top: 5.6rem;
  `}
`

const FirmPage = props => (
  <MainLayout>
    <StyledMainWrapper paddingTop="m">
      <FirmDetails id={props.params.firmId} {...props} />
    </StyledMainWrapper>
  </MainLayout>
)

FirmPage.propTypes = {
  params: PropTypes.shape({
    firmId: PropTypes.string,
  }),
}

export default FirmPage
