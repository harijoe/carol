import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'

import Section from 'components/Section'
import Col from 'components/Col'
import Grid from 'components/Grid'
import Row from 'components/Row'
import RichTextContent from 'components/RichTextContent'
import ProHowItWorksBlock from './organisms/ProHowItWorksBlock'

const StyledCol = styled(Col)`
  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.xl')};

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const ProHowItWorks = ({ translate }) =>
  <Section title={translate('pro.how_it_works.section_title')}>
    <Grid>
      <Row>
        {[1, 2, 3].map(step =>
          <StyledCol xs={12} m={4} key={step}>
            <ProHowItWorksBlock
              imageLink={cloudinary(`/pro_step-${step}.svg`)}
              title={translate(`pro.how_it_works.step_${step}.title`)}
              content={<RichTextContent content={translate(`pro.how_it_works.step_${step}.description`)} />}
            />
          </StyledCol>
      )}
      </Row>
    </Grid>
  </Section>

ProHowItWorks.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ProHowItWorks)
