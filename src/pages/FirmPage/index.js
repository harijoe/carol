import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpointMax } from 'utils/style'

import MainWrapper from 'components/MainWrapper'
import MainLayout from 'layouts/MainLayout'
import FirmDetails from 'containers/FirmDetails'

const StyledMainWrapper = styled(MainWrapper)`
  ${breakpointMax('m')`
    padding-top: 5.6rem;
  `}
`

const FirmPage = props => (
  <MainLayout>
    <StyledMainWrapper paddingTop="m">
      <FirmDetails id={props.match.params.firmId} {...props} />
    </StyledMainWrapper>
  </MainLayout>
)

FirmPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      firmId: PropTypes.string,
    }),
  }),
}

export default FirmPage
