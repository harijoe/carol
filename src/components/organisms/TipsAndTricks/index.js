import React from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import messages from 'utils/messages'
import { theme, breakpoint } from 'utils/style'

import { PostList } from 'containers'
import { Section, TipsAndTricksBlock, Button, Grid, Col, Row } from 'components'

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`

const generateChild = (i, items) => (
  <Col xs={12} m={9} key={i}>
    <TipsAndTricksBlock
      header="Fenêtre"
      tags={[
        { label: 'préparer mes travaux', link: '' },
        { label: 'budget', link: '' },
      ]}
      title={items.title}
    />
  </Col>
)

const StyledButton = styled(Button)`
  width: 100%;
  border: none;
  box-sizing: border-box;
  justify-content: center;
  height: 5.6rem;
  background: ${theme('colors.secondary')};
  color: ${theme('colors.black')};
  font-family: ${theme('fonts.family.montserratBold')};

  ${breakpoint('m')`
    max-width: 30rem;
  `}
`

const TipsAndTricks = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('tips_and_tricks.section_title').label)}>
    <Grid>
      <Row>
        <PostList
          scope="latestProjectsResources"
          tags={['api-work-resources']}
          limit={5}
          active="all"
          generateChild={generateChild}
        />
      </Row>
      <Row>
        <StyledCol xs={12}>
          <StyledButton type="button">
            <FormattedMessage id="tips_and_tricks.call_to_action" />
          </StyledButton>
        </StyledCol>
      </Row>
    </Grid>
  </Section>
)

TipsAndTricks.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(TipsAndTricks)
