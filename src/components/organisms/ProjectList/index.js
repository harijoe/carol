import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Heading, Project, Loading } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1em;
  }
`

const ProjectList = ({ list, loading }) => (
  <Wrapper>
    <Heading level={2}><FormattedMessage id="project.list.heading" /></Heading>
    <Loading loading={loading && list.length === 0}>
      { list.length === 0 && <FormattedMessage id="project.list.empty" /> }
      {list.map((items, i) =>
        <Project
          key={i}
          items={items}
        />
      )}
    </Loading>
  </Wrapper>
)

ProjectList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool,
}

export default ProjectList
