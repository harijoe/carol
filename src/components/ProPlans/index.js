import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax } from 'utils/style'

import Section from 'components/Section'
import Row from 'components/Row'
import Col from 'components/Col'
import PlanCard from './organisms/PlanCard'

const StyledRow = styled(Row)`
  margin-bottom: ${theme('spaces.xxl')};

  ${breakpointMax('l')`
    margin-bottom: 0;
  `}
`

const StyledCol = styled(Col)`
  ${breakpointMax('l')`
    margin-bottom: 8.2rem;
  `}
`

const ProPlans = ({ translate }) =>
  <Section title={translate('pro.plans_title')} light>
    <StyledRow>
      <StyledCol xs={12} l={4}>
        <PlanCard
          type="free"
          namePlan={translate('pro.plans.free_plan_name')}
          pricePlan={translate('pro.plans.free_plan_price')}
          titlePlan={translate('pro.plans.free_plan_title')}
          labelButtonPlan={translate('pro.plans.free_plan_button')}
        />
      </StyledCol>
      <StyledCol xs={12} l={4}>
        <PlanCard
          type="local"
          namePlan={translate('pro.plans.local_plan_name')}
          pricePlan={translate('pro.plans.local_plan_price')}
          titlePlan={translate('pro.plans.local_plan_title')}
          labelButtonPlan={translate('pro.plans.local_plan_button')}
        />
      </StyledCol>
      <StyledCol xs={12} l={4}>
        <PlanCard
          type="connect"
          namePlan={translate('pro.plans.connect_plan_name')}
          pricePlan={translate('pro.plans.connect_plan_price')}
          titlePlan={translate('pro.plans.connect_plan_title')}
          labelButtonPlan={translate('pro.plans.connect_plan_button')}
        />
      </StyledCol>
    </StyledRow>
  </Section>

ProPlans.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(ProPlans)
