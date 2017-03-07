import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Heading, DateTime, Paragraph, Link, Firm } from 'components'

const Article = styled.article``

const listView = (items, ...props) => (
  <Article {...props}>
    <Link to={items['@id']}><Heading level={2}>{items.name}</Heading></Link>
    <Paragraph>
      <FormattedMessage id="project.created_at" />: <DateTime value={items.createdAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.updated_at" />: <DateTime value={items.updatedAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.reference" />: {items.leadReference}
    </Paragraph>
  </Article>
)

const detailView = (items, ...props) => (
  <Article {...props}>
    <Heading level={2}>{items.name}</Heading>
    <Paragraph>
      <FormattedMessage id="project.created_at" />: <DateTime value={items.createdAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.updated_at" />: <DateTime value={items.updatedAt} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.reference" />: {items.leadReference}
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.status" />: <FormattedMessage id={items.status} />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.question" />: { items.answers !== undefined ? Object.keys(items.answers).map(key => `${key} ':' ${items.answers[key]}`) : ''}
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="project.transmitted_to_firms" />:
    </Paragraph>
    { items.firms !== undefined ? items.firms.map(firm => <Firm items={firm} />) : ''}
  </Article>
)
const Project = ({ items, full = false, ...props }) => (full ? detailView(items, ...props) : listView(items, ...props))

Project.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    leadReference: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    answers: PropTypes.object,
    firms: PropTypes.array,
  }).isRequired,
}

export default Project
