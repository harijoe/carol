import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'

import Section from 'components/Section'
import HowItWorksBlock from 'components/HowItWorksBlock'
import Col from 'components/Col'
import Grid from 'components/Grid'
import Row from 'components/Row'
import RichTextContent from 'components/RichTextContent'

const StyledCol = styled(Col)`
  margin-bottom: ${theme('spaces.xl')};

  &:last-child {
    margin-bottom: 0;
  }
`

const HowItWorks = ({ translate }) =>
  <Section title={translate('how_it_works.section_title')}>
    <Grid>
      <Row>
        {[1, 2, 3].map(step =>
          <StyledCol xs={12} m={4} key={step}>
            <HowItWorksBlock
              imageLink={cloudinary(`/step${step}.svg`)}
              title={translate(`how_it_works.step${step}.title`)}
              content={<RichTextContent content={translate(`how_it_works.step${step}.description`)} />}
            />
          </StyledCol>
      )}
      </Row>
    </Grid>
  </Section>

HowItWorks.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(HowItWorks)
