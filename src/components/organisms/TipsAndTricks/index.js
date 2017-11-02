import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { locales } from 'config'
import { breakpoint } from 'utils/style'

import { PostList } from 'containers'
import { Section, TipsAndTricksBlock, Link, Grid, Col, Row } from 'components'

const StyledRow = styled(Row)`
  width: 100%;

  ${breakpoint('m')`
    margin: 0;
  `}

  > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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

const getTags = (items, locale) => {
  const tags = []

  if (Array.isArray(items)) {
    items.forEach(item => tags.push({ label: item, link: `${locales[locale].contentSiteUrl}?s=${item}` }))
  }

  return tags
}

const generateChild = (i, { featuredMedia, categories, tags, title, link }, locale) =>
  <StyledCol xs={12} key={i}>
    <TipsAndTricksBlock
      header={categories[0]}
      tags={getTags(tags, locale)}
      title={title}
      image={i === 0 ? featuredMedia : null}
      link={link}
    />
  </StyledCol>

const StyledLink = styled(Link)`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`

const TipsAndTricks = ({ translate, locale }) =>
  <Section title={translate('tips_and_tricks.section_title')}>
    <Grid narrow>
      <StyledRow>
        <PostList scope="latestProjectsResources" tags={['api-work-resources']} limit={3} generateChild={generateChild} />
      </StyledRow>
      <StyledLink button large to={locales[locale].contentSiteUrl}>
        <FormattedMessage id="tips_and_tricks.call_to_action" />
      </StyledLink>
    </Grid>
  </Section>

TipsAndTricks.propTypes = {
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

export default injectTranslate(TipsAndTricks)
