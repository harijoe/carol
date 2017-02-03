import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Heading, Project } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const ProjectList = ({ list, loading, ...props }) => (
  <Wrapper {...props}>
    <Heading level={2}><FormattedMessage id="project.list.heading" /></Heading>
    {loading && <div>Loading...</div>}
    {list.map((items, i) =>
      <Project
        key={i}
        loading={loading}
        items={items}
      />
    )}
  </Wrapper>
)

ProjectList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default ProjectList
