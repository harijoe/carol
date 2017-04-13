import React from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { contentSiteUrl } from 'config'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import { PostList } from 'containers'
import { Section, TipsAndTricksBlock, Button, Grid, Col, Row } from 'components'

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;

  ${breakpoint('m')`
    &:first-child {
      width: 100%;
    }
    &:not(:first-child):not(:last-child) {
      vertical-align: top;
      display: inline-block;
      padding-right: ${theme('spaces.l')};
      width: 50%;
    }
    &:last-child {
      display: inline-block;
      width: 50%;
    }
  `}
  ${breakpoint('l')`
    max-width: 100%;
  `}
`

const StyledRow = styled(Row)`
  ${breakpoint('m')`
    padding: 0 10%;
  `}
  ${breakpoint('l')`
    padding: 0 0;
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

const StyledButton = styled(Button)`
  width: 100%;
  border: none;
  box-sizing: border-box;
  height: 5.6rem;
  background: ${theme('colors.secondary')};
  color: ${theme('colors.black')};
  font-family: ${theme('fonts.family.montserratBold')};

  ${breakpoint('m')`
    margin-top: ${theme('spaces.m')};
    max-width: 30rem;
  `}
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
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
      <ButtonWrapper>
        <StyledButton type="button">
          <FormattedMessage id="tips_and_tricks.call_to_action" />
        </StyledButton>
      </ButtonWrapper>
    </Grid>
  </Section>
)

TipsAndTricks.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TipsAndTricks)
