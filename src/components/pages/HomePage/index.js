import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, MainWrapper } from 'components'
import { Hero, MotionMenu, SearchEngine } from 'containers'

const HomePage = ({ locale, translate, ...props }) =>
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">
        {translate('pages.home.ld+json')}
      </script>
    </Helmet>
    <SearchEngine locale={locale} />
    <Hero />
    <MainWrapper resetState>
      <HowItWorks locale={locale} />
      <Testimonials />
      <TipsAndTricks locale={locale} />
      <Reinsurance />
    </MainWrapper>
    <MotionMenu />
  </MainLayout>

HomePage.propTypes = {
  locale: PropTypes.string,
  translate: PropTypes.func,
}

export default injectTranslate(HomePage)
