import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { theme } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { locales } from 'config'
import cloudinary from 'utils/cloudinary'

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
    {' '}
    <Link to={locales[locale].homepage.verifiedProsLink} highlight target="_blank">
      <FormattedMessage id="how_it_works.verified_pros.link" />
    </Link>
    {' '}
    <FormattedMessage id="how_it_works.verified_pros.second_part" />
  </Paragraph>
)

const Guide = locale => (
  <Paragraph>
    <FormattedMessage id="how_it_works.guide.first_part" />
    {' '}
    <Link to={locales[locale].contentSiteUrl} highlight target="_blank">
      <FormattedMessage id="how_it_works.guide.link" />
    </Link>
    {' '}
    <FormattedMessage id="how_it_works.guide.second_part" />
  </Paragraph>
)

const HowItWorks = ({ translate, locale }) => (
  <Section title={translate('how_it_works.section_title')}>
    <Grid>
      <Row>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={cloudinary('/step1.svg')}
            title={translate('how_it_works.describe_project.title')}
            content={DescribeProject}
          />
        </StyledCol>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={cloudinary('/step2.svg')}
            title={translate('how_it_works.verified_pros.title')}
            content={VerifiedPros(locale)}
          />
        </StyledCol>
        <StyledCol xs={12} m={4}>
          <HowItWorksBlock
            imageLink={cloudinary('/step3.svg')}
            title={translate('how_it_works.guide.title')}
            content={Guide(locale)}
          />
        </StyledCol>
      </Row>
    </Grid>
  </Section>
)

HowItWorks.propTypes = {
  translate: PropTypes.func.isRequired,
  locale: PropTypes.string,
}

export default injectTranslate(HowItWorks)
