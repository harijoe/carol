import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { Section, Heading, NoProjectYet, Loading, Grid, ProjectList } from 'components'

const StyledSection = styled(Section)`
  position: relative;
  min-height: 100vh;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 40%;
    width: 100%;
    background: ${theme('colors.white')};
    content: '';

    ${breakpoint('m')`
      height: 32rem;
    `}
  }
`

const StyledHeading = styled(Heading)`
  position: relative;

  ${breakpoint('l')`
    margin-bottom: ${theme('spaces.xxl')};
  `}
`

const StyledGrid = styled(Grid)`
  ${breakpoint('l')`
    max-width: 100rem;
  `}
`

const Projects = ({ list, loading }) =>
  <StyledSection light>
    <StyledGrid narrow>
      <StyledHeading level={1}>
        <FormattedMessage id="project.list.heading" />
      </StyledHeading>
      <Loading loading={loading}>
        {list.length === 0 && <NoProjectYet />}
        {list.length !== 0 && <ProjectList list={list} />}
      </Loading>
    </StyledGrid>
  </StyledSection>

Projects.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
}

export default Projects
