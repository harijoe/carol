import React from 'react'
import PropTypes from 'prop-types'
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

const HomePage = ({ locale, ...props }) => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={props.intl.formatMessage({ id: 'pages.home.meta.description' })} />
      <script type="application/ld+json">{props.intl.formatMessage({ id: 'pages.home.ld+json' })}</script>
    </Helmet>
    <Hero />
    <MainWrapper resetState>
      <HowItWorks locale={locale} />
      <Testimonials />
      <TipsAndTricks locale={locale} />
      <Reinsurance />
    </MainWrapper>
  </MainLayout>
)

HomePage.propTypes = {
  intl: intlShape.isRequired,
  locale: PropTypes.string,
}

export default injectIntl(HomePage)
