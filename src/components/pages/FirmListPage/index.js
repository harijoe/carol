import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { MainLayout, MainWrapper, InnerWrapper, Section, Grid } from 'components'

import { FirmList } from 'containers'

const StyledSection = styled(Section)`
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';

    ${breakpoint('m')`
      height: 44rem;
    `}
  }
`
const StyledGrid = styled(Grid)`
  ${breakpoint('xl')`
    max-width: 100rem;
  `}

  > div {
    display: flex;
    flex-direction: column;
  }
`

const FirmListPage = ({ params: { projectId } }) => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <StyledSection light>
          <StyledGrid narrow>
            <FirmList {...{ projectId }} />
          </StyledGrid>
        </StyledSection>
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

FirmListPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default FirmListPage
