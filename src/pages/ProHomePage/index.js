import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import ProHero from 'components/ProHero'
import ProHomeDetails from 'components/ProHomeDetails'

const StyledMainWrapper = styled(MainWrapper)`
  ${breakpoint('l')`
    margin-top: -${theme('spaces.xxl')};
  `}
`

const ProHomePage = ({ translate, rawTranslate, ...props }) => (
  <MainLayout {...props}>
    <Helmet>
      <meta name="description" content={translate('pages.home.meta.description')} />
      <script type="application/ld+json">{rawTranslate('pages.home.ld+json')}</script>
    </Helmet>
    <ProHero />
    <StyledMainWrapper resetState>
      <ProHomeDetails />
    </StyledMainWrapper>
  </MainLayout>
)

ProHomePage.propTypes = {
  translate: PropTypes.func.isRequired,
  rawTranslate: PropTypes.func.isRequired,
}

export default injectTranslate(ProHomePage)
