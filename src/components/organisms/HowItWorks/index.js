import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'
import messages from 'utils/messages'
import { theme } from 'utils/style'
import { cloudinaryUrl, locales } from 'config'

import { Section, HowItWorksBlock, Paragraph, Link, Col, Grid, Row } from 'components'

const StyledCol = styled(Col)`
  margin-bottom: ${theme('spaces.xl')};

  &:last-child {
    margin-bottom: 0;
  }
`

const DescribeProject = (
  <Paragraph>
    <FormattedMessage id="how_it_works.describe_project" />
  </Paragraph>
)

const VerifiedPros = locale => (
  <Paragraph>
    <FormattedMessage id="how_it_works.verified_pros.first_part" />
    <Link to={locales[locale].homepage.verifiedProsLink} highlight target="_blank">
      <FormattedMessage id="how_it_works.verified_pros.link" />
    </Link>
    <FormattedMessage id="how_it_works.verified_pros.second_part" />
  </Paragraph>
)

const Guide = locale => (
  <Paragraph>
    <FormattedMessage id="how_it_works.guide.first_part" />
    <Link to={locales[locale].contentSiteUrl} highlight target="_blank">
      <FormattedMessage id="how_it_works.guide.link" />
    </Link>
    <FormattedMessage id="how_it_works.guide.second_part" />
  </Paragraph>
)

const HowItWorks = ({ intl: { formatMessage }, locale }) => (
  <Section title={formatMessage(messages('how_it_works.section_title').label)}>
    <Grid>
      <Row>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}project-info_step1.svg`}
            title={formatMessage(messages('how_it_works.describe_project.title').label)}
            content={DescribeProject}
          />
        </StyledCol>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}verified-pros_step2.svg`}
            title={formatMessage(messages('how_it_works.verified_pros.title').label)}
            content={VerifiedPros(locale)}
          />
        </StyledCol>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}guide_step3.svg`}
            title={formatMessage(messages('how_it_works.guide.title').label)}
            content={Guide(locale)}
          />
        </StyledCol>
      </Row>
    </Grid>
  </Section>
)

HowItWorks.propTypes = {
  intl: intlShape.isRequired,
  locale: PropTypes.string,
}

export default injectIntl(HowItWorks)
