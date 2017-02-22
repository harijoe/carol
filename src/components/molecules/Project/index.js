import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Heading, DateTime, Paragraph } from 'components'

const Article = styled.article``

const Project = ({ items, ...props }) => (
  <Article {...props}>
    <Heading level={2}>items.name</Heading>
    <Paragraph>
      <FormattedMessage id="project.created_at" />: <DateTime value={items.createdAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.updated_at" />: <DateTime value={items.updatedAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.reference" />: items.reference
    </Paragraph>
  </Article>
)

Project.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    reference: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
}

export default Project
