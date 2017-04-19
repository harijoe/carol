import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Project, Loading } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const ProjectDetails = ({ details, loading, ...props }) => (
  <Wrapper {...props}>
    <Loading loading={loading && details === null}>
      {
        details != null &&
        <Project
          items={details}
          full
        />
      }
    </Loading>
  </Wrapper>
)

ProjectDetails.propTypes = {
  details: PropTypes.object,
  loading: PropTypes.bool,
}

export default ProjectDetails
