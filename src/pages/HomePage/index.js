import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'
import asyncComponent from 'utils/asyncComponent'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Hero from 'containers/Hero'
import SearchEngine from 'containers/SearchEngine'

const AsyncMotionMenu = asyncComponent(() => import(/* webpackChunkName: "Component_MotionMenu" */ 'containers/MotionMenu'))
const AsyncHowItWorks = asyncComponent(() => import(/* webpackChunkName: "Component_HowItWorks" */ 'components/HowItWorks'))
const AsyncTestimonials = asyncComponent(() => import(/* webpackChunkName: "Component_Testimonials" */ 'components/Testimonials'))
const AsyncTipsAndTricks = asyncComponent(() => import(/* webpackChunkName: "Component_TipsAndTricks" */ 'components/TipsAndTricks'))
const AsyncReinsurance = asyncComponent(() => import(/* webpackChunkName: "Component_Reinsurance" */ 'components/Reinsurance'))

const HomePage = ({ locale, translate, rawTranslate, ...props }) => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">{rawTranslate('pages.home.ld+json')}</script>
    </Helmet>
    <SearchEngine />
    <Hero />
    <MainWrapper resetState>
      <AsyncHowItWorks locale={locale} />
      <AsyncTestimonials />
      <AsyncTipsAndTricks locale={locale} />
      <AsyncReinsurance />
    </MainWrapper>
    <AsyncMotionMenu />
  </MainLayout>
)

HomePage.propTypes = {
  locale: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  rawTranslate: PropTypes.func.isRequired,
}

export default injectTranslate(HomePage)
