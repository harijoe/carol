import React from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { contentSiteUrl } from 'config'
import messages from 'utils/messages'
import { breakpoint } from 'utils/style'

import { PostList } from 'containers'
import { Section, TipsAndTricksBlock, Link, Grid, Col, Row } from 'components'

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    margin: 0;
  `}

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;

  ${breakpoint('m')`
    padding: 0;

    &:first-child {
      width: 100%;
    }
    &:not(:first-child):not(:last-child) {
      flex-basis: 50%;
      width: 50%;
    }
    &:last-child {
      flex-basis: 50%;
      width: 50%;
    }
  `}
`

const getTags = (items) => {
  const tags = []

  if (Array.isArray(items)) {
    items.forEach(item => tags.push({ label: item, link: `${contentSiteUrl}tag/${item}` }))
  }

  return tags
}

const generateChild = (i, items) => (
  <StyledCol xs={12} key={i}>
    <TipsAndTricksBlock
      header="Fenêtre"
      image={items.featuredMedia}
      tags={getTags(items.tags)}
      title={items.title}
      imageLink={items.featuredMedia}
    />
  </StyledCol>
)

const StyledLink = styled(Link)`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`

const TipsAndTricks = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('tips_and_tricks.section_title').label)}>
    <Grid narrow>
      <StyledRow>
        <PostList
          scope="latestProjectsResources"
          tags={['api-work-resources']}
          limit={5}
          generateChild={generateChild}
        />
      </StyledRow>
      <StyledLink button>
        <FormattedMessage id="tips_and_tricks.call_to_action" />
      </StyledLink>
    </Grid>
  </Section>
)

TipsAndTricks.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TipsAndTricks)
