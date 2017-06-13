import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { MainLayout, MainWrapper, Section, Grid } from 'components'

import { FirmList } from 'containers'

const StyledMainWrapper = styled(MainWrapper)`
  padding-top: 5.6rem;
  background: ${theme('colors.white')};

  ${breakpoint('m')`
    padding-top: ${theme('spaces.xxxl')};
  `}
`
const StyledSection = styled(Section)`
  position: relative;
  padding-top: ${theme('spaces.xxl')};

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';

    ${breakpoint('m')`
      height: 37rem;
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
    <StyledMainWrapper>
      <StyledSection light>
        <StyledGrid narrow>
          <FirmList {...{ projectId }} />
        </StyledGrid>
      </StyledSection>
    </StyledMainWrapper>
  </MainLayout>
)

FirmListPage.propTypes = {
  params: PropTypes.shape({
    projectId: PropTypes.string,
  }),
}

export default FirmListPage
