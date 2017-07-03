import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'

import {
  MainLayout,
  HowItWorks,
  Testimonials,
  TipsAndTricks,
  Reinsurance,
  MainWrapper,
} from 'components'
import { Hero } from 'containers'

const HomePage = props => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={props.intl.formatMessage({ id: 'pages.home.meta.description' })} />
      <script type="application/ld+json">{props.intl.formatMessage({ id: 'pages.home.ld+json' })}</script>
    </Helmet>
    <Hero />
    <MainWrapper resetState>
      <HowItWorks />
      <Testimonials />
      <TipsAndTricks />
      <Reinsurance />
    </MainWrapper>
  </MainLayout>
)

HomePage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(HomePage)
