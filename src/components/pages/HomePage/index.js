import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, MainWrapper } from 'components'
import { Hero, MotionMenu, SearchEngine } from 'containers'

const HomePage = ({ locale, translate, rawTranslate, ...props }) => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">{rawTranslate('pages.home.ld+json')}</script>
    </Helmet>
    <SearchEngine />
    <Hero />
    <MainWrapper resetState>
      <HowItWorks locale={locale} />
      <Testimonials />
      <TipsAndTricks locale={locale} />
      <Reinsurance />
    </MainWrapper>
    <MotionMenu />
  </MainLayout>
)

HomePage.propTypes = {
  locale: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  rawTranslate: PropTypes.func.isRequired,
}

export default injectTranslate(HomePage)
