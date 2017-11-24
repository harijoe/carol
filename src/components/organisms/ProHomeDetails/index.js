import React from 'react'
import styled from 'styled-components'

import ProPlans from '../ProPlans'
import ProKeySellingPoints from '../ProKeySellingPoints'
import ProHowItWorks from '../ProHowItWorks'
import ProStories from '../ProStories'
import ProEnquiriesSection from '../ProEnquiriesSection'

const Wrapper = styled.div``

const ProHomeDetails = () =>
  <Wrapper>
    <ProKeySellingPoints />
    <ProPlans />
    <ProHowItWorks />
    <ProStories />
    <ProEnquiriesSection />
  </Wrapper>

export default ProHomeDetails
