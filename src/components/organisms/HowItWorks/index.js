import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { theme } from 'utils/style'
import messages from 'utils/messages'
import { cloudinaryUrl } from 'config'

import { Section, HowItWorksBlock, Paragraph } from 'components'

const StyledLink = styled.a`
  color: ${theme('colors.secondary')};
  text-decoration: none;
`

const StyledCol = styled(Col)`
  margin-bottom: ${theme('spaces.xl')};

  &:last-child{
    margin-bottom: 0;
  }
`

const DescribeProject = (
  <Paragraph>
    <FormattedMessage id="how_it_works.describe_project" />
  </Paragraph>
)

const VerifiedPros = (
  <Paragraph>
    <FormattedMessage id="how_it_works.verified_pros.first_part" />
    <StyledLink href="https://conseils-travaux.quotatis.fr">
      <FormattedMessage id="how_it_works.verified_pros.link" />
    </StyledLink>
    <FormattedMessage id="how_it_works.verified_pros.second_part" />
  </Paragraph>
)

const Guide = (
  <Paragraph>
    <FormattedMessage id="how_it_works.guide.first_part" />
    <StyledLink href="https://conseils-travaux.quotatis.fr">
      <FormattedMessage id="how_it_works.guide.link" />
    </StyledLink>
    <FormattedMessage id="how_it_works.guide.second_part" />
  </Paragraph>
)

const HowItWorks = ({ intl: { formatMessage } }) => (
  <Section title={formatMessage(messages('how_it_works.section_title').label)}>
    <Grid>
      <Row>
        <StyledCol xs={12}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}project-info_step1.svg`}
            title={formatMessage(messages('how_it_works.describe_project.title').label)}
            content={DescribeProject}
          />
        </StyledCol>
        <StyledCol xs={12}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}verified-pros_step2.svg`}
            title={formatMessage(messages('how_it_works.verified_pros.title').label)}
            content={VerifiedPros}
          />
        </StyledCol>
        <StyledCol xs={12}>
          <HowItWorksBlock
            imageLink={`${cloudinaryUrl}guide_step3.svg`}
            title={formatMessage(messages('how_it_works.guide.title').label)}
            content={Guide}
          />
        </StyledCol>
      </Row>
    </Grid>
  </Section>
)

HowItWorks.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(HowItWorks)
