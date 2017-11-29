import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import DirectoryHero from 'components/DirectoryHero'

const DirectoryHomePage = ({ translate, rawTranslate, ...props }) => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">{rawTranslate('pages.home.ld+json')}</script>
    </Helmet>
    <DirectoryHero />
    <MainWrapper resetState />
  </MainLayout>
)

DirectoryHomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  rawTranslate: PropTypes.func.isRequired,
}

export default injectTranslate(DirectoryHomePage)
