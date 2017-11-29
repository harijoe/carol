import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import Section from 'components/Section'
import Row from 'components/Row'
import Col from 'components/Col'
import Icon from 'components/Icon'

const StyledCol = styled(Col)`
  ${breakpointMax('m')`
    margin-bottom: ${theme('spaces.xl')};

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const Wrapper = styled.article`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const IconKsp = styled(Icon)`
  height: 95px;
  width: 95px;
  margin-right: ${theme('spaces.m')};

  ${breakpoint('l')`
    height: 125px;
    width: 125px;
    margin-right: ${theme('spaces.l')};
  `}
`

const Text = styled.p`
  flex: 1;
  margin: 0;
  line-height: 1.25;
  font-weight: bold;
`

const ProKeySellingPoints = ({ translate }) =>
  <Section title={translate('pro.ksp.section_title')}>
    <Row>
      {[1, 2, 3].map(step =>
      <StyledCol xs={12} m={4} key={step}>
        <Wrapper>
          <IconKsp icon={`icon_ksp_${step}`} />
          <Text>{translate(`pro.ksp_paragraph_${step}`)}</Text>
        </Wrapper>
      </StyledCol>
    )}
    </Row>
  </Section>

ProKeySellingPoints.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(ProKeySellingPoints)
