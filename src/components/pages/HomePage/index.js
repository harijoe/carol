import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { MainLayout, HowItWorks, Testimonials, TipsAndTricks, Reinsurance, MainWrapper } from 'components'
import { Hero, MotionMenu } from 'containers'

const HomePage = ({ locale, translate, featureMotionMenuEnabled, ...props }) =>
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">
        {translate('pages.home.ld+json')}
      </script>
    </Helmet>
    <Hero />
    <MainWrapper resetState>
      <HowItWorks locale={locale} />
      <Testimonials />
      <TipsAndTricks locale={locale} />
      <Reinsurance />
    </MainWrapper>
    {featureMotionMenuEnabled && <MotionMenu />}
  </MainLayout>

HomePage.propTypes = {
  locale: PropTypes.string,
  translate: PropTypes.func,
  featureMotionMenuEnabled: PropTypes.bool,
}

export default injectTranslate(HomePage)
