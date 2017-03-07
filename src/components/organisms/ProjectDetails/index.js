import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Project } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const ProjectDetails = ({ details, loading, ...props }) => (
  <Wrapper {...props}>
    {loading && <div>Loading...</div>}
    <Project
      loading={loading}
      items={details}
      full="true"
    />
  </Wrapper>
)

ProjectDetails.propTypes = {
  details: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

export default ProjectDetails
